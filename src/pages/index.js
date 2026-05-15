import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { Header, Contact, Footer } from '../features'

function IndexPage({ data }) {
  const { title, tagline, urls } = data.site.siteMetadata

  return (
    <Layout>
      <main>
        <Header title={title} tagline={tagline} urls={urls} />
        <Contact urls={urls} />
      </main>
      <Footer title={title} tagline={tagline} urls={urls} />
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { title, tagline } = data.site.siteMetadata

  return (
    <title>
      {title} | {tagline}
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
