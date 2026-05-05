import React from 'react'
import Layout from '../layout'

import Footer from '../features/Footer'

function NotFoundPage() {
  return (
    <Layout>
      <p style={{ margin: 60, fontSize: '2em' }}>NotFoundPage </p>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
