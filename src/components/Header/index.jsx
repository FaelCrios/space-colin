import React from 'react'
import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Site's logo" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder='What are you looking for ?'/>
                <img src={search} alt="Icon search" />
            </div>
        </header>
    )
}

export default Header