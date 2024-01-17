import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 54%;
  background: linear-gradient(670deg, rgba(254, 240, 207, 1) 0%, rgba(255, 255, 255, 0.26) 100%);
`

const StyledContainer = styled.div`
  width: 1200px; 
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
const StyledContent = styled.div`
  height: 35vh;
  margin-top: 48px;
  margin-right: 90px;
`

const Title1 = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-size: 48px;
  font-weight: 600;
`

const Title2 = styled.p`
  color: ${(props) => props.theme.secondaryColorText};
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  width: 550px;
`
const Title3 = styled.p`
  color: ${(props) => props.theme.secondaryColorText};
  font-size: 18px;
  font-weight: 400;
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
  /* width: 50%;
  padding: 90px 50px; */
`

export default function SpaceContainer({ children }) {
  return (
    <>
      <StyledFlex>
        <StyledContainer>
        <StyledContent>
            <Title1>
              Inscreva-se gratuitamente
            </Title1>
            <Title2>
                Acompanhe de perto os processos do mundo ágil através de episódios com pessoas da área
            </Title2>
            <Title3>
              Disponíveis nas principais plataformas
            </Title3>
            <Logo>
              <StyledLogo1 />
              <StyledLogo2 />
            </Logo>
          </StyledContent>
          <StyledForm>{children}</StyledForm>
        </StyledContainer>
      </StyledFlex>
    </>
  )
}
