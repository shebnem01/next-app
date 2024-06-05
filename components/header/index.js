import Link from 'next/link'
import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import styles from './styles.module.css'
const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles['header-wrapper']}>
      <Link className={styles.logo} href='/'>
        <FaPlayCircle/>Movies
      </Link>
      <nav className={styles.nav}>
        <Link href=''>Movies</Link>
        <Link href=''>Series</Link>
        <Link href=''>Kids</Link>
      </nav>
      </div>
    </header>
  )
}

export default Header