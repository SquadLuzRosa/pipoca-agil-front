import ReactModal from 'react-modal'
import styled from 'styled-components'

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #f1f1f1;
  border: 1px solid #cccccc;
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
  gap: 12px;
  position: absolute;
  width: 271px;
  height: 284px;
  left: 64px;
  top: calc(50% - 284px / 2);
`

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  position: absolute;
  width: 460px;
  height: 48px;
  left: 71px;
  top: 430px;
  border-radius: 24px;
`

export const TitleModal = styled.span`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #354f83; // Cor do texto do título
`

export const Modal = ({ isOpen, onRequestClose, contentLabel }) => (
  <StyledModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel={contentLabel} />
)
