import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme'

export function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
