import React from 'react'

import Layout from '../layout'
import { Header, About, Services, Contact, Footer } from '../features'

function IndexPage() {
  return (
    <Layout>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
