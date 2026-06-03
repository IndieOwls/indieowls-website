import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { FlatButton, SectionInner, Eyebrow } from '../components'
import * as styles from './Header.css'

export function Header({ title, tagline, urls }) {
  return (
    <header className={styles.header}>
      <div className={styles.heroImageWrapper}>
        <StaticImage
          src='../images/hero_image.jpg'
          alt=''
          layout='fullWidth'
          placeholder='blurred'
          loading='eager'
          imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={styles.heroOverlay}>
        <SectionInner>
          <div className={styles.heroContent}>
            <div className={styles.copyBlock}>
              <Eyebrow as='h1'>{title}</Eyebrow>
              <p className={styles.heroStatement}>You think it. We build it.</p>
              <small className={styles.heroLead}>{tagline}</small>
              <p className={styles.heroDescription}>
                We partner with startups to shape product strategy and build platforms&mdash;
                without the overhead of a full engineering team.
              </p>
              <div className={styles.actions}>
                <FlatButton as='a' href='#contact' type='dark'>
                  How We Work
                </FlatButton>
                <FlatButton as='a' href={urls.contactForm} type='primary'>
                  Launch Your Idea
                </FlatButton>
              </div>
            </div>
            <div className={styles.highlights} aria-label='Agency highlights'>
              <div className={styles.highlightPill}>Product Strategy & Design</div>
              <div className={styles.highlightPill}>
                Built <em>with</em> AI. Not by AI.
              </div>
              <div className={styles.highlightPill}>Launch at an Affordable Price</div>
            </div>
          </div>
        </SectionInner>
      </div>
    </header>
  )
}

export default Header
