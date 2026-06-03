import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../layout'
import { Seo, Section, SectionInner, SectionHeading } from '../../components'
import Footer from '../../features/Footer'
import * as styles from './_index.css'

const staff = [
  {
    name: 'Denny S. Temple',
    role: 'Software Contractor',
    slug: '/staff/dentemple',
  },
]

function StaffPage() {
  return (
    <Layout footer={<Footer />}>
      <Section>
        <SectionInner>
          <SectionHeading title='Our Team' />
          <div className={styles.grid}>
            {staff.map((person) => (
              <Link key={person.slug} to={person.slug} className={styles.staffLink}>
                <StaticImage
                  src='../../images/dentemple.jpg'
                  alt={person.name}
                  className={styles.avatar}
                  imgStyle={{ borderRadius: '50%' }}
                  width={80}
                  height={80}
                />
                <h3 className={styles.name}>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
              </Link>
            ))}
          </div>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default StaffPage

export const Head = () => <Seo title='Our Team' path='/staff' />
