// src/pages/_app.tsx
import React, {useEffect} from 'react'
import {StylesProvider, ThemeProvider as MaterialUIThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import {muiTheme} from "../components/utils";

const MyApp = ({Component, pageProps}: { Component: any; pageProps: any }) => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default MyApp