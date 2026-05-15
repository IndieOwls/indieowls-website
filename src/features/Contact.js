import React from 'react'
import styled from 'styled-components'

import { Card, FlatButton, Section, SectionHeading, SectionInner, Stack } from '../components'

export function Contact({ urls }) {
  return (
    <Section id='contact'>
      <SectionInner>
        <CalloutCard $variant='accent'>
          <Stack $align='center'>
            <div>
              <SectionHeading eyebrow='Start the conversation' title='Burned by AI slop?'>
                Give our just-right engineering recipes a try. It's software made to perfection.
              </SectionHeading>
            </div>
            <ActionColumn>
              <InquiryList>
                <li>Prototypes launched in weeks, not months.</li>
                <li>Intelligent use of AI Agentic Workflows</li>
                <li>Scrum Team Certified</li>
                <li>Guaranteed made in the U.S.A. 🇺🇸</li>
              </InquiryList>
              <FlatButton as='a' href={urls.contactForm} type='primary'>
                Get in Touch Today!
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
