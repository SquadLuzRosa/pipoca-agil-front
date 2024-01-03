import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.white};
  width: 120px;
  height: 60px;
  cursor: pointer;
  border-radius: 70px;
  border: 1px solid ${(props) => props.theme.colorText};
  color: ${(props) => props.theme.colorText};
  font-weight: bold;
`
export const ButtonBlue = styled.button`
  background-color: ${(props) => props.theme.colorText};
  width: 180px;
  height: 60px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 200px;
  border-radius: 45px;
  border: 1px solid ${(props) => props.theme.colorText};
  color: ${(props) => props.theme.white};
  font-size: 22px;
`
