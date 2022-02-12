import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../elements_CSS/Country.module.css'

export const Country = ({id, image, name, continent, })=>{
  const style = {
    backgroundImage:`url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
      
  }
      
    return(

      <div style={style} className={styles.container}>

      <Link className={styles.link} to={`/details/${id}`}>
          <h4>{name.toUpperCase().slice(0,12)}</h4>
      </Link>
          <h5>{continent.toUpperCase()}</h5>
      </div>
    )
}


