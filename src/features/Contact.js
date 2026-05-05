import React from 'react'
import styled from 'styled-components'

import { Card, FlatButton, Section, SectionHeading, SectionInner, Stack } from '../components'

const inquiryTypes = [
  'New SaaS MVPs that need product definition and delivery',
  'Existing platforms that need a more cohesive user experience',
  'Teams looking for focused engineering support to ship the next release',
]

export function Contact({ urls }) {
  return (
    <Section id='contact'>
      <SectionInner>
        <CalloutCard $variant='accent'>
          <Stack $align='center'>
            <div>
              <SectionHeading eyebrow='Start the conversation' title='Need a SaaS product partner for what comes next?'>
                Tell us what stage your product is in, where the friction is, and what you want the
                next release to accomplish. Early-stage ideas are welcome.
              </SectionHeading>
            </div>
            <ActionColumn>
              <p>
                Most conversations start with scope, timeline, and the product decisions that need
                to happen before implementation accelerates.
              </p>
              <InquiryList>
                {inquiryTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </InquiryList>
              <FlatButton as='a' href={urls.contactForm} type='primary'>
                Contact Indie Owls
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
