import ReactModal from 'react-modal'
import styled from 'styled-components'

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 50px;
  background-color:#f1f1f1;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 12px;
  width: 802px;
  height: 506px;
  box-sizing: border-box;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 40px;
  width: 271px;
`

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TitleModal = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
  color:${(props) => props.theme.primaryColor};
`
export const LabelModal = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0px;
  line-height: 25px;
  color:${(props) => props.theme.colorText1};
`
export const TextModal = styled.p`
  font-size: 23px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 15px;
  color:${(props) => props.theme.colorText2};
`
export const ButtonModal = styled.button`
  color: ${(props) => (props.colorbg ? props.theme.white : props.theme.primaryColor)};
  background-color: ${(props) => (props.colorbg ? props.theme.primaryColor : 'transparent')};
  height: 48px;
  padding: 12px 28px 12px 28px;
  border: ${(props) => (props.colorbg ? 'none' : '2px solid' + props.theme.primaryColor)};
  border-radius: 24px;
  margin: 20px 35px 30px 35px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
`;

export const Modal = ({ isOpen, onRequestClose, contentLabel }) => (
  <StyledModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel={contentLabel} />
)