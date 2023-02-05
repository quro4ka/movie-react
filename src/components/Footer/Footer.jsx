import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__title}>Movie App</div>
      <div className={styles.footer__copyright}>@2023, Movie Inc ...</div>
    </div>
  )
}
