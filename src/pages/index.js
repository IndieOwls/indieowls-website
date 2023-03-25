import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { Header, About, Services, Contact, Footer } from '../features'

function IndexPage({ data }) {
  const { title, tagline, urls } = data.site.siteMetadata
  return (
    <Layout>
      <Header title={title} tagline={tagline} urls={urls} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { title, tagline } = data.site.siteMetadata
  return (
    <title>
      🚀 {tagline} | {title}
    </title>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        tagline
        urls {
          contactForm
          linkedin
        }
      }
    }
  }
`
