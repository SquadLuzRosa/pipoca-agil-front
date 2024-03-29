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
  TitleModal,
  LabelModal,
  TextModal,
  ButtonModal
} from '@/components/layout/ModalConfirmation'
import { SuccessModal, SuccessButtons } from '@/components/layout/SuccessModal'
import postRegister from './api/user_api/userRegister'


const FormContainerOut = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.8);
  background-color: ${(props) => props.theme.white}; 
  border-radius: 12px;
  padding: 10px;
  width: 490px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
`

const FormContainer = styled.div`
  width: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Form = styled.form`
  width: 423px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
  text-align: center;
  color: ${(props) => props.theme.placeholderColor};

  a{
    color: ${(props) => props.theme.primaryColor};
    margin-left: 10px;
  }
`

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
`

const Label = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: bold;
  color: #415a8a;
`

function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm()

  const formattedDate = watch('date') ? watch('date').split('-').reverse().join('/') : '';
  

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


  const handlePasswordVisibility = (isVisible) => {
    // Lógica para controlar a visibilidade da senha
    // Você pode usar o estado local aqui ou realizar outras ações
    if (isVisible) {
      console.log('Senha visível');
    } else {
      console.log('Senha oculta');
    }
  };

  const postDataFunction = async () => {
    const formData = {
      name: 'thiago Silva',
      email: 'tftf@gmail.com',
      phone: '61994162084',
      dateOfBirth: '29/08/2002',
      password: '123456789@Th',
      confirmPassword: '123456789@Th'
    };
  
    try {
      const responseData = await postRegister(formData);
      // Lide com a resposta aqui (se necessário)
      console.log("Dados enviados com sucesso:", responseData);
    } catch (error) {
      // Lide com erros aqui
      console.error("Erro ao enviar os dados:", error);
      // Você também pode querer notificar o usuário sobre o erro, se apropriado
    }
  };


  return (
    <>
      <Navbar />
      <SpaceContainer>
        <FormContainerOut>
          <Title>
            Cadastro
          </Title>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input
                type="text"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                error={errors.nome}
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
              {errors.nome && <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.nome.message}</p>}

              <Input
                type="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                error={errors.email}
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido'
                  }
                })}
              />
              {errors.email && <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.email.message}</p>}

              <Input
                label="Telefone"
                placeholder="(11) 12345-6789"
                mask="(99) 99999-9999"
                error={errors.telefone}
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/,
                    message: 'Telefone inválido'
                  }
                })}
              />
              {errors.telefone && <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.telefone.message}</p>}

              <Input
                type="date"
                label="Data de nascimento"
                error={errors.date}
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
              {errors.date && <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.date.message}</p>}

              <Input
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                error={errors.confirmPassword}
                onTogglePasswordVisibility={handlePasswordVisibility}
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
              {errors.password && <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.password.message}</p>}

              <Input
                type="password"
                label="Confirmar senha"
                placeholder="A senha deve ser idêntica a anterior"
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                error={errors.password}
                {...register('confirmPassword', {
                  required: 'Confirmação de senha é obrigatória',
                  validate: (value) => value === watch('password') || 'As senhas não conferem'
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: '#bd2415', width: '100%', fontSize: '14px', fontWeight: '400', paddingLeft: '10px', textAlign: 'left'   }}>{errors.confirmPassword.message}</p>
              )}

              <ButtonBlue type="submit">Cadastrar</ButtonBlue>
            </Form>
            <Text>
              Já possui uma conta? <a href="#"> Login</a>
            </Text>
          </FormContainer>
        </FormContainerOut>
      </SpaceContainer>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmação de Dados"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor e opacidade do overlay
          },
        }}
      >
        <div>
          <TitleModal>
            Os dados informados estão corretos?
          </TitleModal>
          <ModalContent>
            <LabelModal>
              <p label>Nome completo </p>
            </LabelModal>
            <TextModal>{watch('nome')}</TextModal>
            <LabelModal>
              <p>E-mail </p>
            </LabelModal>
            <TextModal>{watch('email')}</TextModal>
            <LabelModal>
              <p>Telefone </p>
            </LabelModal>
            <TextModal>{watch('telefone')}</TextModal>
            <LabelModal>
              <p>Data de nascimento </p>
            </LabelModal>
            <TextModal>{formattedDate}</TextModal>
          </ModalContent>
          <div>
            <ModalButtons>
              <ButtonModal colorbg={true} onClick={SuccessModal}>Sim, finalizar cadastro</ButtonModal>
              <ButtonModal onClick={reopenModal}>Não, preciso editar</ButtonModal>
            </ModalButtons>
          </div>
        </div>
      </StyledModal>
      {isSuccessModalOpen && (
        <SuccessModal isOpen={isSuccessModalOpen} closeModal={closeSuccessModal} >
          <SuccessButtons>
            <ButtonModal onClick={reopenModal}>Fazer login</ButtonModal>
          </SuccessButtons>
        </SuccessModal>
      )}
    </>
  )
}

export default RegisterPage
