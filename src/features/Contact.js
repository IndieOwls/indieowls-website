import React from 'react'
import { Card, FlatButton, Section, SectionHeading, SectionInner, Stack } from '../components'
import * as styles from './Contact.css'

export function Contact({ urls }) {
  return (
    <Section id='contact'>
      <SectionInner>
        <Card variant='accent' className={styles.calloutCard}>
          <Stack align='center'>
            <div>
              <SectionHeading eyebrow='Start the conversation' title='Burned by AI slop?'>
                Give our just-right engineering recipes a try. It's software made to perfection.
              </SectionHeading>
            </div>
            <div className={styles.actionColumn}>
              <ul className={styles.inquiryList}>
                <li>Prototypes launched in weeks, not months.</li>
                <li>Intelligent use of AI Agentic Workflows</li>
                <li>Scrum Team Certified</li>
                <li>Guaranteed made in the U.S.A. 🇺🇸</li>
              </ul>
              <FlatButton as='a' href={urls.contactForm} type='primary'>
                Get in Touch Today!
              </FlatButton>
            </div>
          </Stack>
        </Card>
      </SectionInner>
    </Section>
  )
}

export default Contact
