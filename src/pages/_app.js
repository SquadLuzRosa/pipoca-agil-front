import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../theme'

const GlobalStyle = createGlobalStyle`
      * {
        padding: 0;
        margin: 0;
      }  
        
      body {
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colorTextForm};
        background-color: ${props => props.theme.background};
      }
    `
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
