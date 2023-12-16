import styled from 'styled-components'

const StyledFlex = styled.div` 
  display: flex;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 54%;
`

const StyledContent = styled.div` 
  width: 50%;
  height: 35vh;
  margin-top: 9%;
  margin-left: 40px;
  margin-right: 90px;
`

const Title1 = styled.p`
  color: ${(props) => props.theme.colorText};
  font-size: 24px;
`

const Title2 = styled.p`
  color: ${(props) => props.theme.colorText1};
  font-size: 15px;
  margin-top: 20px;
  padding: 0px 90px 0px 0px;
`
const Title3 = styled.p`
  color: ${(props) => props.theme.colorText2};
  font-size: 15px;
  margin-top: 60px;
`

const Logo = styled.span`
  display: flex;
  width: 102%;
  height: 26%;
`

const StyledLogo1 = styled.span`
  background-image: url('/Logo-youtube.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-top: 2%; 
  margin-left: 0%;
  display: flex;
  width: 50%;
  height: 56%;
`

const StyledLogo2 = styled.span`
  background-image: url('/Logo-spotify.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-top: 2%; 
  margin-right: 86%;
  display: flex;
  width: 50%;
  height: 56%;
  margin-left: 15px;
`

const StyledForm = styled.div` 
  width: 50%;
  padding: 90px 50px;
`

export default function SpaceContainer({ children }) {
  return (
    <>
      <StyledFlex>
        <StyledContent>
          <Title1>
            <h1>Inscreva-se gratuitamente</h1>
          </Title1>
          <Title2>
            <h2>Acompanhe de perto os processos do mundo ágil através de episódios com pessoas da área</h2>
          </Title2>
          <Title3>
            <h3>Disponíveis nas principais plataformas</h3>
          </Title3>
          <Logo>
            <StyledLogo1 />
            <StyledLogo2 />
          </Logo>
        </StyledContent>
        <StyledForm>{children}</StyledForm>
      </StyledFlex>
    </>
  )
}
    