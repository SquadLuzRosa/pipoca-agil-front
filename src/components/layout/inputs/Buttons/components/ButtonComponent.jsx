import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => (props.colorbg ? props.theme.primaryColor : 'transparent')};
  height: 48px;
  cursor: pointer;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colorText};
  color: ${(props) => (props.colorbg ? '#ffffff' : props.theme.primaryColor)};
  padding: 12px 28px;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1440px) {
    height: 47px;
    border-radius: 24px;
    gap: 80px;
  }
`

function ButtonComponent({ label, colorbg }) {
  return <Button colorbg={colorbg}>{label}</Button>
}

export default ButtonComponent

