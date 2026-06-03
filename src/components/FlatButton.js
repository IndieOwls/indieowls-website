import React from 'react'
import { cx } from '../lib/cx'
import * as styles from './FlatButton.css'

const variantMap = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
  dark: styles.variantDark,
}

export function FlatButton({ type = 'secondary', as: Tag = 'button', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.base, variantMap[type] || variantMap.secondary, className)} {...rest}>
      {children}
    </Tag>
  )
}

export default FlatButton
