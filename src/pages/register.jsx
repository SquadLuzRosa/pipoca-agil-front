import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useRef, useState, useEffect } from 'react'

import Navbar from '@/components/layout/Navbar'
import SpaceContainer from '@/components/layout/SpaceContainer'
import Input from '@/components/layout/inputs/Input'
import { ButtonBlue, Button } from '@/components/layout/inputs/Button'
import {
  ModalButtons,
  ModalContent,
  StyledModal,
  TitleModal
} from '@/components/layout/ModalConfirmation'
import { SuccessModal, SuccessButtons } from '@/components/layout/SuccessModal'

const FormContainerOut = styled.div`
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 12px;
  background-color: white;
  padding: 0px 40px 40px 40px;
`

const FormContainer = styled.div`
  padding: 0px 40px 40px 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
  color: rgba(156, 156, 156, 1);
`

const Title = styled.p`
  padding: 30px 0px 0px 0px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`

const Label = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: bold;
`

function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const successModalRef = useRef(null)

  const handleForm = (data) => {
    console.log(data)
    setIsModalOpen(true)
  }

  const handleConfirmPasswordChange = (value) => {
    setValue('confirmPassword', value)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSuccessModal = () => {
    setIsModalOpen(false)
    setIsSuccessModalOpen(true)
  }

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
    setIsModalOpen(false)
  }

  const reopenModal = () => {
    setIsSuccessModalOpen(false)
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isSuccessModalOpen && successModalRef.current) {
      successModalRef.current.focusFirstInput()
    }
  }, [isSuccessModalOpen])

  return (
    <>
      <Navbar />
      <SpaceContainer>
        <FormContainerOut>
          <Title>
            <h2>Cadastro</h2>
          </Title>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input
                type="text"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                {...register('nome', {
                  required: 'Nome é obrigatório',
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Nome inválido'
                  },
                  maxLength: {
                    value: 255,
                    message: 'Nome muito longo'
                  }
                })}
              />
              {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}

              <Input
                type="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido'
                  }
                })}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

              <Input
                label="Telefone"
                placeholder="(11) 12345-6789"
                mask="(99) 99999-9999"
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/,
                    message: 'Telefone inválido'
                  }
                })}
              />
              {errors.telefone && <p style={{ color: 'red' }}>{errors.telefone.message}</p>}

              <Input
                type="date"
                label="Data de nascimento"
                {...register('date', {
                  required: 'Data de nascimento é obrigatória',
                  validate: (value) => {
                    const birthDate = new Date(value)
                    const currentDate = new Date()
                    const age = currentDate.getFullYear() - birthDate.getFullYear()

                    // Se o usuário for menor de 18 anos, a validação falha
                    return age >= 18 || 'Usuários menores de 18 anos não podem se cadastrar'
                  }
                })}
              />
              {errors.date && <p style={{ color: 'red' }}>{errors.date.message}</p>}

              <Input
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                {...register('password', {
                  required: 'Senha é obrigatória',
                  minLength: {
                    value: 8,
                    message: 'A senha deve ter pelo menos 8 caracteres'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial'
                  }
                })}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

              <Input
                type="password"
                label="Confirmar senha"
                placeholder="A senha deve ser idêntica a anterior"
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                {...register('confirmPassword', {
                  required: 'Confirmação de senha é obrigatória',
                  validate: (value) => value === watch('password') || 'As senhas não conferem'
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
              )}

              <ButtonBlue type="submit">Cadastrar</ButtonBlue>
            </Form>
            <Text>
              Já possui uma conta? <a href="#"> login</a>
            </Text>
          </FormContainer>
        </FormContainerOut>
      </SpaceContainer>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmação de Dados"
      >
        <div>
          <TitleModal>
            <h2>Os Dados informados estão corretos?</h2>
          </TitleModal>
          <ModalContent>
            <Label>
              <p label>Nome completo: </p>
            </Label>
            <p>{watch('nome')}</p>
            <Label>
              <p>E-mail: </p>
            </Label>
            <p>{watch('email')}</p>
            <Label>
              <p>Telefone: </p>
            </Label>
            <p>{watch('telefone')}</p>
            <Label>
              <p>Data de nascimento: </p>
            </Label>
            <p>{watch('date')}</p>
          </ModalContent>
          <div>
            <ModalButtons>
              <ButtonBlue onClick={openSuccessModal}>Sim, finalizar cadastro</ButtonBlue>
              <Button onClick={reopenModal}>Não, preciso editar</Button>
            </ModalButtons>
          </div>
        </div>
      </StyledModal>
      {isSuccessModalOpen && (
        <SuccessModal isOpen={isSuccessModalOpen} closeModal={closeSuccessModal} >
          <SuccessButtons>
            <ButtonBlue>faze login</ButtonBlue>
          </SuccessButtons>
        </SuccessModal>
      )}
    </>
  )
}

export default RegisterPage
