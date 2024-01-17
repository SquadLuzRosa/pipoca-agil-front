import { useState, useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../theme'

// Estilo global
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Source Sans 3', sans-serif;
  }
`

function AppWrapper({ Component, pageProps }) {
  // Estado para verificar se o código está sendo executado no cliente
  const [isClient, setIsClient] = useState(false)

  // Efeito que será executado apenas no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Renderização condicional com base no ambiente (cliente ou servidor)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isClient ? <Component {...pageProps} /> : <p>Loading on the server...</p>}
      </ThemeProvider>
    </>
  )
}

export default AppWrapper
