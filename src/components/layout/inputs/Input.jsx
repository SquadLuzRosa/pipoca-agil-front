import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { forwardRef } from 'react'

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

const Input = forwardRef(({ label, error, mask, ...props }, ref) => {
  const hasError = !!error;
  // if (hasError) {
  //   alert('teste')
  // }
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      {mask ? (
        <StyledMaskedInput mask={mask} maskChar="_" placeholder={label} error={error} {...props} ref={ref} hasError={hasError}/>
      ) : (
        <StyledInput placeholder={label} error={error} {...props} ref={ref} hasError={hasError}/>
      )}
    </InputContainer>
  )
})

export default Input
