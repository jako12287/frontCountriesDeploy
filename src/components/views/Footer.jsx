import React from "react";
import styles from '../elements_CSS/Footer.module.css' 
import logoG from '../../utils/logoG.png'
import logoL from '../../utils/logoL.png'

 export const Footer = ()=>{
    const style1 = {
        backgroundImage:`url(${logoG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'8rem',
        height:'2rem'
    }
    const style = {
        backgroundImage:`url(${logoL})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'8rem',
        height:'2rem'
    }
    return(
        <footer className={styles.container}>
            <h6  className={styles.title}>Created by Johan Cortes</h6>
           <a href='https://github.com/jako12287'  rel='noreferrer' target='_blank'><div className={styles.logo1} style={style1}></div></a>
           <a href='https://www.linkedin.com/in/johancortesdev/' rel='noreferrer' target='_blank'><div className={styles.logo2} style={style}></div></a>
        </footer>
    )
}