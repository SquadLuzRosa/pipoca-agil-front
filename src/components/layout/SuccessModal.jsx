import styled from 'styled-components'
import ReactModal from 'react-modal'
import { ButtonBlue } from './inputs/Button'

const StyledSuccessModal = styled(ReactModal)`
  width: 752px;
  height: 500px;
  border-radius: 12px;
  border: 1px solid #ccc;
  background: #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Image = styled.image`
  background-image: url('/check.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-bottom: 10px;
  margin-top: 80px;
  width: 6vh;
  height: 6vh;
`

const SuccessTitle = styled.div`
  color: rgba(62, 175, 63, 1);
  width: 455px;
  height: 42px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`

const SuccessButtons = styled.div`
  padding-right: 30%;
`

export const SuccessModal = ({ isOpen }) => {
  return (
    <StyledSuccessModal isOpen={isOpen}>
      <Image />

      <SuccessTitle>Usuário cadastrado com sucesso</SuccessTitle>
      <SuccessButtons>
        <ButtonBlue>fazer login</ButtonBlue>
      </SuccessButtons>
    </StyledSuccessModal>
  )
}
