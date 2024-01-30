import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.white};
  width: 120px;
  height: 60px;
  cursor: pointer;
  border-radius: 70px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
`

export const ButtonBlue = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  label
  width: 156px;
  height: 48px;
  cursor: pointer;
  padding: 13px 28px 13px 28px;
  margin: 10px 0;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};

  font-size: 20px;
  font-weight: 400;
`
