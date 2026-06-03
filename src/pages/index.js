import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { Header, Services, Contact, Footer } from '../features'
import { Seo } from '../components'

function IndexPage({ data }) {
  const { title, tagline, urls } = data.site.siteMetadata

  return (
    <Layout footer={<Footer />}>
      <Header title={title} tagline={tagline} urls={urls} />
      <Services />
      <Contact urls={urls} />
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { title, tagline } = data.site.siteMetadata

  return <Seo title={title} description={tagline} path='/' />
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
