import React from 'react'
import { Link } from 'gatsby'
import { Card, SectionInner, Stack } from '../components'
import * as styles from './Footer.css'

export function Footer({ title = 'Indie Owls Creative Studio' }) {
  return (
    <footer className={styles.footer}>
      <SectionInner>
        <Stack>
          <Card as='ul' variant='muted' className={styles.cardList}>
            <li>
              <strong>{title}</strong>
            </li>
            <li>Based in Scranton, PA, U.S.A. (US East)</li>
          </Card>
          <Card as='ul' variant='muted' className={styles.cardList}>
            <strong>Connect</strong>
            <li>
              <Link to='/staff'>Our Team</Link>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/indie-owls-creative/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://github.com/IndieOwls' target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </li>
          </Card>
        </Stack>
      </SectionInner>
    </footer>
  )
}

export default Footer
