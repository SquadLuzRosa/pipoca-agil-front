import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 64%;
  background: linear-gradient(670deg, rgba(254, 240, 207, 1) 0%, rgba(255, 255, 255, 0.26) 100%);

  @media (min-width: 744px) and (max-width: 1133px) {
    height: 105vh;
    width: auto;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: #85863b;
    display: flex;
    width: 150vh;
    height: 305vh;
  }


const StyledContainer = styled.div`
  width: 1200px; 
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
const StyledContent = styled.div`
  height: 35vh;
  margin-top: 9%;
  margin-left: 6%;

  @media (max-width: 1440px) {
    padding: 48px 0px;
    gap: 12px;
  }
`

const Title1 = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 48px;
  font-weight: 600;
  margin-left: 20px;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }
`

const Title2 = styled.p`
  color: ${(props) => props.theme.secondaryColorText};
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 20px;
  width: 529px;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }
`
const Title3 = styled.p`
  color: ${(props) => props.theme.colorText2};
  font-size: 18px;
  font-weight: 400;
  margin-top: 50px;
  margin-left: 20px;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }
`

const Logo = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 26%;
  margin-left: 20px;

  @media (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
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
    display: none;
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

  @media (min-width: 744px) and (max-width: 1133px) {
    display: none;
  }
`

const StyledForm = styled.div`
  width: 50%;
  padding: 90px 50px;

  @media (min-width: 744px) and (max-width: 1133px) {
    display: flex;
    width: 494px;
    height: 200px;
    margin-right: 100px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    background-color: #833e10;
  }

`

export default function SpaceContainer({ children }) {
  return (
    <>
      <StyledFlex>
        <StyledContainer>
        <StyledContent>
          <Title1>Inscreva-se gratuitamente</Title1>
          <Title2>
            Acompanhe de perto os processos do mundo ágil através de episódios com pessoas da área
          </Title2>
          <Title3>Disponíveis nas principais plataformas</Title3>
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
