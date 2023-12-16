import styled from 'styled-components'

import { Button } from './inputs/Button'

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorText};
`

const StyledImage = styled.span`
  background-image: url('/microfone-pipoca.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 30px;

  width: 4%;
  height: 6vh;
`

const StyledInicio = styled.span`
  padding: 0px 20px;
`
const StyledSobre = styled.span`
  padding: 0 20px;
`
const StyledEpisodios = styled.span`
  padding: 0 20px;
`
const StyledProjetos = styled.span`
  padding: 0 20px;
`
const StyledBlog = styled.span`
  padding: 0 20px;
`

const StyledLogin = styled.span`
  margin-left: 850px;
  margin-right: 50px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledImage />
      <StyledInicio>Início</StyledInicio>
      <StyledSobre>Sobre</StyledSobre>
      <StyledEpisodios>Episódios</StyledEpisodios>
      <StyledProjetos>Projetos</StyledProjetos>
      <StyledBlog>Blog</StyledBlog>
      <StyledLogin>
        <Button>Login</Button>
      </StyledLogin>
    </StyledNavbar>
  )
}

export default Navbar
