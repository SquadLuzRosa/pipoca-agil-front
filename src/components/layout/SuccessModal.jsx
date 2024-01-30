import styled from 'styled-components'
import ReactModal from 'react-modal'

const StyledSuccessModal = styled(ReactModal)`
  width: 752px;
  height: 500px;
  border-radius: 12px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.theme.backgroundModal};
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

  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 18px;
  }
  @media (min-width: 744px) and (max-width: 1133px) {
    display: flex;
    width: 600px;
    height: 414px;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: red;
    display: flex;
    width: 312px;
    height: 472px;
    padding: 32px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
  }
`

const Image = styled.image`
  background-image: url('/check.svg');
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

  @media (min-width: 744px) and (max-width: 1133px) {
    font-family: 'Source Sans Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.32px;
    padding: 0px;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: #eeabab;
    text-align: center;
    /* Heading/H6 */
    font-family: 'Source Sans Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */
    letter-spacing: 0.24px;
  }
`

const SuccessButtons = styled.div`
  width: 455px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1134px) {
    button:nth-child(2) {
      display: none;
    }
  }
  @media (min-width: 744px) and (max-width: 1133px) {
    width: 100%;
    gap: 30px;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: #42d0d4;
    display: flex;
    padding: var(--Number, 0px);

    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    gap: 32px;
    align-self: stretch;
    flex-wrap: wrap;
  }
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

  @media (min-width: 744px) and (max-width: 1133px) {
    background-color: #99b9d3;
    width: 41%;
    height: 50px;
    font-size: 16px;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: #805353;
    //display: flex;
    width: 350px;
    height: 48px;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`

export const SuccessModal = ({ isOpen }) => {
  return (
    <StyledSuccessModal isOpen={isOpen}>
      <Image />

      <SuccessTitle>Usuário cadastrado com sucesso</SuccessTitle>
      <SuccessButtons>
        <ButtonModal colorbg={true}>Fazer login</ButtonModal>
        <ButtonModal colorbg={false}>Ir para a Página Inicial</ButtonModal>
      </SuccessButtons>
    </StyledSuccessModal>
  )
}
