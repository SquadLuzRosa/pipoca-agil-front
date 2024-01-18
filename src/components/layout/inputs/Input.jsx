import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { forwardRef, useState } from 'react'

import ClosedEyeIcon from '../eyers/ClosedEyeIcon'
import OpenEyeIcon from '../eyers/OpenEyeIcon'


const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 3px;
  color: ${(props) => props.theme.primaryColor};
`

const StyledInput = styled.input`
  width: 100%;
  height: 42px;;
  /* border: 1px solid ${(props) => props.theme.colorBorder}; */
  border: 1px solid ${(props) => (props.hasError ? props.theme.red : props.theme.colorBorder)};
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  color: ${(props) => props.theme.primaryColor};
  

  &:focus {
    outline: none;
    border: 1px solid #7385a9;
  }
  &::placeholder{
    color: ${(props) => props.theme.placeholderColor};
  }
`
const IconOpenPassword = styled.img`
  width: 20px;
  object-fit: cover;
  margin: 0;
`;
const IconClosePassword = styled.img`
  width: 20px;
  object-fit: cover;
  margin: 0;
`;

const StyledEyeIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 12px;
  
  transform: translate(0,-50%);
  display: flex;
  align-items: baseline;
  justify-content: center;
  `

const InputPassword = styled.span`
  display: flex;
  position: relative;
`;

const StyledMaskedInput = styled(InputMask)`
  width: 100%;
  /* border: 1px solid ${(props) => props.theme.colorBorder}; */
  border: 1px solid ${(props) => (props.hasError ? props.theme.red : props.theme.colorBorder)};
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  color: ${(props) => props.theme.primaryColor};

  ${(props) => props.error && `border: 2px solid ${props.theme.error};`}
  &:focus {
    outline: none;
    border: 1px solid #7385a9;
  }

  &::placeholder{
    color: ${(props) => props.theme.placeholderColor};
  }
`

const Input = forwardRef(({ label, error, mask, onTogglePasswordVisibility, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = !!error;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (onTogglePasswordVisibility) {
      onTogglePasswordVisibility(!showPassword);
    }
  };

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      {mask ? (
        <StyledMaskedInput mask={mask} maskChar="_" placeholder={label} error={error} {...props} ref={ref} hasError={hasError}/>
      ) : (
        <InputPassword>
          <StyledInput
            type={showPassword ? 'text' : 'password'}
            placeholder={label}
            error={error}
            {...props}
            ref={ref}
            hasError={hasError}
          />
          {type === 'password' && (
            <StyledEyeIcon onClick={togglePasswordVisibility}>
              {showPassword ? 
                <IconOpenPassword src="/eyer.png" alt="" /> 

              : <IconClosePassword src="/eyer_off.png" alt="" />
              
              }
            </StyledEyeIcon>
          )}
        </InputPassword>

      )}
    </InputContainer>
  )
})

export default Input
