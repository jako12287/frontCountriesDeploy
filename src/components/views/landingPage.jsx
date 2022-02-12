import styles from '../elements_CSS/LandingPage.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export let LandinPage = ()=>{
    return(
        <div className={styles.container}>
            <header className={styles.header}>
            <h4>COUNTRIES</h4>
            </header>
            <main className={styles.main}>
            <Link className={styles.link} to='/home'> <button>HOME</button> </Link>
            </main>
            <footer className={styles.footer}>
            <Footer/>
            </footer>
        </div>
    )
}


