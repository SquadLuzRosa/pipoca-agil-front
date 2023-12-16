import styled from 'styled-components'

import Navbar from '@/components/layout/Navbar'
import SpaceContainer from '@/components/layout/SpaceContainer'
import Input from '@/components/layout/inputs/Input'
import { ButtonBlue } from '@/components/layout/inputs/Button'

const FormContainerOut = styled.div`
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 12px;
  background-color: white;
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

function RegisterPage() {
  return (
    <>
      <Navbar />
      <SpaceContainer>
        <FormContainerOut>
          <Title>
            <h2>Cadastro</h2>
          </Title>
          <FormContainer>
            <Form>
              <Input 
                type="text" 
                label="Nome completo" 
                placeholder="Digite seu nome completo" 
              />
              <Input 
                type="email" 
                label="E-mail" 
                placeholder="Digite seu e-mail"
              />
              <Input 
                type="number" 
                label="Telefone" 
                placeholder="(11) 12345-6789"
              />
              <Input 
                type="date" 
                label="Data de nascimento" 
                placeholder="DD/MM/AAAA" 
              />
              <Input 
                type="password" 
                label="Senha" 
                placeholder="Digite sua senha"
              />
              <Input 
                type="password" 
                label="Confirmar senha" 
                placeholder="A senha deve ser idêntica a anterior"
              />
              <ButtonBlue>Cadastrar</ButtonBlue>
            </Form>
            <Text>
              Já possui uma conta? <a href="#"> login</a>
            </Text>
          </FormContainer>
        </FormContainerOut>
      </SpaceContainer>
    </>
  )
}

export default RegisterPage
