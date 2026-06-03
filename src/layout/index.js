import React from 'react'

import 'normalize.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/roboto-slab/400.css'

import './GlobalStyle.css.js'

export function Layout({ children, footer }) {
  return (
    <>
      <main>{children}</main>
      {footer}
    </>
  )
}

export default Layout
