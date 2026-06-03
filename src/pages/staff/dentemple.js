import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../layout'
import { Seo, Card, Section, SectionInner, SectionHeading, BuyMeACoffee } from '../../components'
import Footer from '../../features/Footer'
import * as styles from './dentemple.css'

function DentempleProfilePage() {
  return (
    <Layout footer={<Footer />}>
      {/* Intro */}
      <Section className={styles.sectionCompact}>
        <SectionInner>
          <Link to='/staff' className={styles.backLink}>
            &larr; Our Team
          </Link>
          <div className={styles.profileHeader}>
            <StaticImage
              src='../../images/dentemple.jpg'
              alt='Denny S. Temple'
              className={styles.avatar}
              imgStyle={{ borderRadius: '50%' }}
              width={96}
              height={96}
            />
            <div>
              <h1 className={styles.name}>Denny S. Temple</h1>
              <p className={styles.role}>Software Contractor</p>
              <p className={styles.location}>U.S.A. 🇺🇸</p>
              <ul className={styles.contactLinks}>
                <li className={styles.contactLinksItem}>
                  <a
                    className={styles.contactLink}
                    href='https://linkedin.com/in/dentemple'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className={styles.contactLinksItem}>
                  <a
                    className={styles.contactLink}
                    href='https://github.com/dentemple'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </a>
                </li>
                <li className={styles.contactLinksItem}>
                  <a
                    className={styles.contactLink}
                    href={`mailto:${atob('ZGVudGVtcGxlQGluZGllb3dscy5jb20=')}`}
                  >
                    <span className={styles.emailLink}>
                      {atob('ZGVudGVtcGxlQGluZGllb3dscy5jb20=')}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaWrapper}>
            <BuyMeACoffee username='dentemple' />
          </div>
        </SectionInner>
      </Section>
      {/* Summary */}
      <Section tone='muted' className={styles.sectionCompact}>
        <SectionInner>
          <SectionHeading title='Summary'>
            A self-taught software engineer with 15+ years of experience in developing web apps and
            software solutions. A hobbyist since 1999, and an early adopter for both Machine
            Learning and React.js. Has a strong passion for continuous learning and contributing to
            innovative projects.
          </SectionHeading>
        </SectionInner>
      </Section>

      {/* Skills */}
      {/* <Section className={styles.sectionCompact}>
        <SectionInner>
          <SectionHeading title='Skills &amp; Technologies' />
          <div className={styles.skillsGrid}>
            <Card className={styles.skillCard}>
              <Card.Heading as='h3' className={styles.skillCategory}>
                Languages
              </Card.Heading>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}>Language 1</li>
                <li className={styles.skillListItem}>Language 2</li>
                <li className={styles.skillListItem}>Language 3</li>
              </ul>
            </Card>
            <Card className={styles.skillCard}>
              <Card.Heading as='h3' className={styles.skillCategory}>
                Frameworks &amp; Libraries
              </Card.Heading>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}>Framework 1</li>
                <li className={styles.skillListItem}>Framework 2</li>
                <li className={styles.skillListItem}>Framework 3</li>
              </ul>
            </Card>
            <Card className={styles.skillCard}>
              <Card.Heading as='h3' className={styles.skillCategory}>
                Tools &amp; Platforms
              </Card.Heading>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}>Tool 1</li>
                <li className={styles.skillListItem}>Tool 2</li>
                <li className={styles.skillListItem}>Tool 3</li>
              </ul>
            </Card>
            <Card className={styles.skillCard}>
              <Card.Heading as='h3' className={styles.skillCategory}>
                Other
              </Card.Heading>
              <ul className={styles.skillList}>
                <li className={styles.skillListItem}>Skill 1</li>
                <li className={styles.skillListItem}>Skill 2</li>
                <li className={styles.skillListItem}>Skill 3</li>
              </ul>
            </Card>
          </div>
        </SectionInner>
      </Section> */}

      {/* Experience */}
      {/* <Section tone='muted' className={styles.sectionCompact}>
        <SectionInner>
          <SectionHeading title='Experience' />
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>Job Title</h3>
                <p className={styles.timelineMeta}>Company Name &middot; Start – End</p>
              </div>
              <div className={styles.timelineBody}>
                <ul className={styles.timelineList}>
                  <li className={styles.timelineListItem}>
                    Responsibility or accomplishment 1 — focus on outcomes, not tasks.
                  </li>
                  <li className={styles.timelineListItem}>
                    Responsibility or accomplishment 2 — include technologies or methods used.
                  </li>
                  <li className={styles.timelineListItem}>
                    Responsibility or accomplishment 3 — quantify where possible.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>Job Title</h3>
                <p className={styles.timelineMeta}>Company Name &middot; Start – End</p>
              </div>
              <div className={styles.timelineBody}>
                <ul className={styles.timelineList}>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 1.</li>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 2.</li>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 3.</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>Job Title</h3>
                <p className={styles.timelineMeta}>Company Name &middot; Start – End</p>
              </div>
              <div className={styles.timelineBody}>
                <ul className={styles.timelineList}>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 1.</li>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 2.</li>
                  <li className={styles.timelineListItem}>Responsibility or accomplishment 3.</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionInner>
      </Section> */}

      {/* Education & Certifications */}
      <Section className={styles.sectionCompact}>
        <SectionInner>
          <SectionHeading title='Education &amp; Certifications' />
          <div className={styles.eduGrid}>
            <Card>
              <Card.Heading>B.A. Professional Studies</Card.Heading>
              <Card.Text className={styles.eduMeta}>Lackawanna College</Card.Text>
              <Card.Text>
                GPA 3.9 &middot; Magna Cum Laude &middot; Humanities Division Award &middot;
                President's List
              </Card.Text>
            </Card>
            <Card>
              <Card.Heading>Certified ScrumMaster</Card.Heading>
              <Card.Text className={styles.eduMeta}>Scrum Alliance</Card.Text>
              <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='https://bcert.me/smxmttsik' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://bcert.me/bc/html/img/badges/generated/badge-7227.png'
                    alt='Certified ScrumMaster® (CSM®) Badge'
                    style={{ width: '100px' }}
                  />
                </a>
              </Card.Text>
            </Card>
            <Card>
              <Card.Heading>Certified Product Owner</Card.Heading>
              <Card.Text className={styles.eduMeta}>Scrum Alliance</Card.Text>
              <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='https://bcert.me/svbvfxfjx' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://bcert.me/bc/html/img/badges/generated/badge-7224.png'
                    alt='Certified Scrum Product Owner® (CSPO®) Badge'
                    style={{ width: '100px' }}
                  />
                </a>
              </Card.Text>
            </Card>
          </div>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export default DentempleProfilePage

export const Head = () => <Seo title='Denny S. Temple' path='/staff/dentemple' />
