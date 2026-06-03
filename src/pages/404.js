import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'
import { Section, SectionInner, Seo } from '../components'
import Footer from '../features/Footer'

import * as styles from './_404.css'

function NotFoundPage() {
  return (
    <Layout footer={<Footer />}>
      <Section>
        <SectionInner>
          <div className={styles.wrapper}>
            <span className={styles.mutedCode}>404</span>
            <p className={styles.message}>Page not found.</p>
            <Link to='/' className={styles.homeLink}>
              Back home
            </Link>
          </div>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo title='Not found' path='/404' />
