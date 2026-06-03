import React from 'react'
import Card from './Card'
import * as styles from './BuyMeACoffee.css'

export function BuyMeACoffee({ username, label = 'Buy me a coffee' }) {
  const href = `https://buymeacoffee.com/${username}`

  return (
    <Card variant='accent' className={styles.card}>
      <div className={styles.inner}>
        <Card.Heading>Support me</Card.Heading>
        <Card.Text className={styles.description}>
          If something I made is useful to you, consider buying me a coffee.
        </Card.Text>
        <a href={href} target='_blank' rel='noopener noreferrer' className={styles.button}>
          {label}
        </a>
      </div>
    </Card>
  )
}

export default BuyMeACoffee
