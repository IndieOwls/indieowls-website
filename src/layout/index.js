import React from 'react'
import { ThemeProvider } from 'styled-components'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/roboto-slab/400.css'

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
