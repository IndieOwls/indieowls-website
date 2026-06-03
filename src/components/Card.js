import React from 'react'
import { cx } from '../lib/cx'
import * as styles from './Card.css'

const variantMap = {
  default: styles.variantDefault,
  muted: styles.variantMuted,
  accent: styles.variantAccent,
  dark: styles.variantDark,
}

function Card({ variant = 'default', as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.base, variantMap[variant] || variantMap.default, className)} {...rest}>
      {children}
    </Tag>
  )
}

function CardHeading({ as: Tag = 'h3', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.heading, className)} {...rest}>
      {children}
    </Tag>
  )
}

function CardText({ as: Tag = 'p', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.text, className)} {...rest}>
      {children}
    </Tag>
  )
}

Card.Heading = CardHeading
Card.Text = CardText

export { Card }
export default Card
