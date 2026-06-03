import React from 'react'
import { Card, Section, SectionInner, SectionHeading } from '../components'
import * as styles from './Services.css'

const services = [
  {
    label: 'Service 1',
    desc: 'Planning and strategy.',
  },
  {
    label: 'Service 2',
    desc: 'Design and development.',
  },
  {
    label: 'Service 3',
    desc: 'Launch and support.',
  },
]

export function Services() {
  return (
    <Section id='services'>
      <SectionInner>
        <SectionHeading eyebrow='What we do' title='Services'>
          We begin by defining specific project requirements and goals. We see the project through
          with a regular cadence set for communication. We prioritize quality assurance and include
          support and maintenance as needed.
        </SectionHeading>
        <div className={styles.grid}>
          {services.map((s) => (
            <Card key={s.label}>
              <Card.Heading>{s.label}</Card.Heading>
              <Card.Text>{s.desc}</Card.Text>
            </Card>
          ))}
        </div>
      </SectionInner>
    </Section>
  )
}

export default Services
