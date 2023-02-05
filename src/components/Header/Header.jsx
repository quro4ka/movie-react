import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import userLogo from './../../assets/userLogo.png'
import headerLogo from './../../assets/headerLogo.png'
import { Search } from '../Search/Search'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__left}>
          <img className={styles.header__logo} src={headerLogo} alt="headerLogo" />
          <span className={styles.header__title}>Movie App</span>
        </div>
      </Link>

      <Search />

      <Link to="/">
        <div className={styles.user}>
          <img className={styles.user__logo} src={userLogo} alt="logo" />
        </div>
      </Link>
    </div>
  )
}
