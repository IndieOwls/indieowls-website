import React from 'react'
import { cx } from '../lib/cx'
import * as styles from './Section.css'

const toneMap = {
  default: styles.toneDefault,
  muted: styles.toneMuted,
  accent: styles.toneAccent,
  dark: styles.toneDark,
}

export function Section({ tone = 'default', className, children, ...rest }) {
  return (
    <section className={cx(styles.section, toneMap[tone] || toneMap.default, className)} {...rest}>
      {children}
    </section>
  )
}

export function SectionInner({ className, children, ...rest }) {
  return (
    <div className={cx(styles.sectionInner, className)} {...rest}>
      {children}
    </div>
  )
}

export function Eyebrow({ as: Tag = 'p', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.eyebrow, className)} {...rest}>
      {children}
    </Tag>
  )
}

export default Section
