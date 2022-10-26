import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav: FunctionComponent = () => (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.nav__link}>cher.dev</a>
      </Link>
      <Link className={styles.navLink} href="/resume">
        <a className={styles.nav__link}>Resume</a>
      </Link>
      <Link href="/fun">
        <a className={styles.nav__link}>Fun Stuff</a>
      </Link>
    </nav> 
)

export default Nav
