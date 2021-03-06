// src/pages/_app.tsx
import React, {useEffect} from 'react'
import {StylesProvider, ThemeProvider as MaterialUIThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../public/global.css'

import {muiTheme} from "../components/utils";
import styled from "styled-components";
import {StoreContextProvider} from "../store/storeProvider";
import {Head} from "../components/Head";

const Wrapper = styled.div`
`

const App = ({Component, pageProps}: { Component: any; pageProps: any }) => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StoreContextProvider>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={muiTheme}>
          <CssBaseline/>
          <Head/>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </StoreContextProvider>
  )
}

export default App