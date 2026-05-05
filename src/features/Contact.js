import React from 'react'
import styled from 'styled-components'

import { Card, FlatButton, Section, SectionHeading, SectionInner, Stack } from '../components'

const inquiryTypes = [
  'A Product Roadmap and Business Needs',
  'Cutting-edge technology, including AI-Agent Workflows',
  'Rapid Software Strategy & Development',
  'Scrum Certified Team Development & Mentorship',
]

export function Contact({ urls }) {
  return (
    <Section id='contact'>
      <SectionInner>
        <CalloutCard $variant='accent'>
          <Stack $align='center'>
            <div>
              <SectionHeading eyebrow='Start the conversation' title='Need a Software Product?'>
                Tell us what stage your product is in, where the friction is, and what you want the
                next release to accomplish. <br />
                <br />{' '}
                <span style={{ color: 'blue', fontWeight: 'bold' }}>
                  Early-stage ideas are welcome.
                </span>
              </SectionHeading>
            </div>
            <ActionColumn>
              <InquiryList>
                {inquiryTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </InquiryList>
              <FlatButton as='a' href={urls.contactForm} type='primary'>
                Contact Indie Owls Creative
              </FlatButton>
            </ActionColumn>
          </Stack>
        </CalloutCard>
      </SectionInner>
    </Section>
  )
}

const CalloutCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xxl};
`

const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const InquiryList = styled.ul`
  color: ${({ theme }) => theme.colors.textMuted};
`

export default Contact
