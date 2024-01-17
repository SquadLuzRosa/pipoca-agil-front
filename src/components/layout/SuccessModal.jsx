import styled from 'styled-components'
import ReactModal from 'react-modal'

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
  justify-content: center;
  text-align: center;
`

const Image = styled.image`
  background-image: url('/check.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-bottom: 10px;
  margin-top: 0px;
  width: 6vh;
  height: 6vh;
`

const SuccessTitle = styled.h2`
  color: rgba(62, 175, 63, 1);
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 60px;
`

const SuccessButtons = styled.div`
  width: 455px;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const ButtonModal = styled.button`
  color: ${(props) => (props.colorbg ? props.theme.white : props.theme.primaryColor)};
  background-color: ${(props) => (props.colorbg ? props.theme.primaryColor : 'transparent')};
  width: 90%;
  height: 45px;
  padding: 12px 28px 12px 28px;
  border: ${(props) => (props.colorbg ? 'none' : '2px solid' + props.theme.primaryColor)};
  border-radius: 24px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
`;


export const SuccessModal = ({ isOpen }) => {
  return (
    <StyledSuccessModal isOpen={isOpen}>
      <Image />

      <SuccessTitle>Usuário cadastrado com sucesso</SuccessTitle>
      <SuccessButtons>
        <ButtonModal colorbg={true} >Fazer login</ButtonModal>
      </SuccessButtons>
    </StyledSuccessModal>
  )
}
