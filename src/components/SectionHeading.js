import React from 'react'
import { cx } from '../lib/cx'
import * as styles from './SectionHeading.css'

export function SectionHeading({ eyebrow, title, children, align = 'left', tone = 'default', className }) {
  return (
    <div className={cx(styles.wrapper, className)} style={{ textAlign: align }}>
      {eyebrow ? (
        <p className={cx(styles.eyebrowText, tone === 'dark' ? styles.eyebrowTextDark : styles.eyebrowTextDefault)}>
          {eyebrow}
        </p>
      ) : null}
      <h2>{title}</h2>
      {children ? (
        <p
          className={cx(styles.lead, tone === 'dark' ? styles.leadDark : styles.leadDefault)}
          style={align === 'center' ? { textAlign: 'center' } : undefined}
        >
          {children}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
