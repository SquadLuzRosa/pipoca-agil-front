import styled from 'styled-components'
import InputMask from 'react-input-mask'
import React, { forwardRef } from 'react'

const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`

const StyledMaskedInput = styled(InputMask)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  ${(props) => props.error && `border: 2px solid ${props.theme.error};`}
  &:focus {
    outline: none;
  }
`

const Input = forwardRef(({ label, error, mask, ...props }, ref) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      {mask ? (
        <StyledMaskedInput mask={mask} maskChar="_" placeholder={label} error={error} {...props} ref={ref} />
      ) : (
        <StyledInput placeholder={label} error={error} {...props} ref={ref} />
      )}
    </InputContainer>
  )
})

export default Input
