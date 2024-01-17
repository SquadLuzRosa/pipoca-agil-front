import styled from 'styled-components'
import Logo from './Logo'
// import { Button } from './inputs/Button/style/Button'
import  ButtonComponent  from './inputs/Buttons/components/ButtonComponent'


const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.primaryColor};
  padding: 0 41px;
`

const ContainerNavbar = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledImage = styled.span`
  background-image: url('/logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 30px;

  min-width: 90px;
  height: 6vh;
`

const StyledInicio = styled.span`
  padding: 0px 20px;
  font-size: 18px;
  font-weight: 400;
`
const StyledSobre = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
`
const StyledEpisodios = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
`
const StyledProjetos = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
`
const StyledBlog = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
`

const StyledLogin = styled.span`
  display: flex;
  justify-content: space-between;
  width: 270px;
`


function Navbar() {
  return (
    <StyledNavbar>
      <ContainerNavbar>
        <Logo />
        <StyledInicio>Início</StyledInicio>
        <StyledSobre>Sobre</StyledSobre>
        <StyledEpisodios>Episódios</StyledEpisodios>
        <StyledProjetos>Projetos</StyledProjetos>
        <StyledBlog>Blog</StyledBlog>
      </ContainerNavbar>
      <StyledLogin>
        <ButtonComponent colorbg={true} label={'Cadastre-se'}/>
        <ButtonComponent label={'Login'}/>
        
      </StyledLogin>
    </StyledNavbar>
  )
}

export default Navbar
