import { useState } from 'react'
import styled from 'styled-components'
import ButtonComponent from './inputs/Buttons/components/ButtonComponent'


const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.primaryColor};
  padding: 0 41px;

  @media (max-width: 1440px) {
    height: 48px;
    padding: 16px;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    width: 305%;
    height: 38px;
  }

`

const ContainerNavbar = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1133px) {
    justify-content: space-between;
    flex: auto;
  }
`

const StyledImage = styled.span`
  background-image: url('/Microfone-pipoca.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 5px;

  width: 55px;
  height: 7vh;

  @media (max-width: 1440px) {
    width: 51px;
    height: 43px;
  }
`

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 1133px) {
    display: block;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 600px) {
  }

`

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0;
  background-color: ${(props) => props.theme.white};
  z-index: 1;
  margin-top: 30px;
  gap: 46px;

  @media (min-width: 320px) and (max-width: 600px) {
  }
`

const StyledLink = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;
  padding: 8px 24px;
`

const StyledLogin = styled.span`
  display: flex;
  justify-content: space-between;
  width: 270px;

  @media (max-width: 1440px) {
    width: 281px;
    height: 43px;
    padding: 2px 0px 2px 0px;
  }

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none; /* Adicionando a regra para ocultar o componente */
  }

  @media (min-width: 744px) and (max-width: 1133px) {
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    gap: 16px;
    flex-wrap: wrap;

    & > * {
      width: 100%;
      max-width: 223px;
      box-sizing: border-box;
    }
  }
`
//
const StyledInicio = styled.span`
  padding: 0px 20px;
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }

`

const StyledSobre = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }

`

const StyledEpisodios = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }

`

const StyledProjetos = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }

`

const StyledBlog = styled.span`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }
`
//
const StyledContent = styled.div`
  padding: 90px 50px;
`
const Title3 = styled.p`
  color: ${(props) => props.theme.colorText2};
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 30px;
`

const Logo = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 26%;
  margin-left: 20px;

  @media (min-width: 744px) and (max-width: 1133px) {
    margin-left: 1px;
  }
`

const StyledLogo1 = styled.span`
  background-image: url('/Logo-youtube.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-top: 2%;
  margin-left: 0%;
  display: flex;
  width: 50%;
  height: 56%;

  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 744px) and (max-width: 1133px) {
    width: 50px;
    height: 50px;
  }
`

const StyledLogo2 = styled.span`
  background-image: url('/Logo-spotify.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-top: 2%;
  margin-right: 86%;
  display: flex;
  width: 50%;
  height: 56%;
  margin-left: 15px;

  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-right: 83%;
  }

  @media (min-width: 744px) and (max-width: 744px) {
    width: 50px;
    height: 50px;
    margin-right: 53%;
  }

`


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <StyledNavbar>
      <ContainerNavbar>
        <StyledImage />
        <StyledInicio>Início</StyledInicio>
        <StyledSobre>Sobre</StyledSobre>
        <StyledEpisodios>Episódios</StyledEpisodios>
        <StyledProjetos>Projetos</StyledProjetos>
        <StyledBlog>Blog</StyledBlog>
        <StyledMenu onClick={toggleMenu}>☰</StyledMenu>
        {menuOpen && (
          <MenuItems>
            <StyledLink>Início</StyledLink>
            <StyledLink>Sobre</StyledLink>
            <StyledLink>Episódios</StyledLink>
            <StyledLink>Projetos</StyledLink>
            <StyledLink>Blog</StyledLink>
            {/* Adicionando a condição para a largura da tela entre 744px e 1133px */}
            <StyledLogin>
              <ButtonComponent colorbg={true} label={'Cadastre-se'} />
              <ButtonComponent label={'Login'} />
            </StyledLogin>
            <StyledContent>
              <Title3>Disponíveis nas principais plataformas</Title3>
              <Logo>
                <StyledLogo1 />
                <StyledLogo2 />
              </Logo>
            </StyledContent>
          </MenuItems>
        )}
      </ContainerNavbar>
      <StyledLogin>
        <ButtonComponent colorbg={true} label={'Cadastre-se'} />
        <ButtonComponent label={'Login'} />

      </StyledLogin>
    </StyledNavbar>
  )
}

export default Navbar
