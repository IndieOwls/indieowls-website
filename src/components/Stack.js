import React from 'react'
import { spacing } from '../layout/theme'
import { cx } from '../lib/cx'
import * as styles from './Stack.css'

export function Stack({ gap = 'xl', columns = 2, align = 'stretch', className, children, ...rest }) {
  return (
    <div
      className={cx(styles.stack, className)}
      style={{
        '--stack-gap': spacing[gap] || gap,
        '--stack-cols': columns,
        '--stack-align': align,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Stack
