import styles from '../elements_CSS/CardDetail.module.css'
import React from 'react'

export const Details = ({id, name, continent, image, capital, subregion, area, population,activities})=>{
    const style = {
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return(
    <div className={styles.container}>
            <div className={styles.title}>{name.toUpperCase()}</div>
            <div className={styles.code}>Code<div className={styles.rescode}>{id}</div></div>
            <div className={styles.conti}>Continent<div className={styles.resconti}>{continent}</div></div>
            <div className={styles.capi}>Capital<div className={styles.rescapi}>{capital}</div></div>
            <div className={styles.subr}>Subregion<div className={styles.ressubr}>{subregion}</div></div>
            <div className={styles.popu}>Population<div className={styles.respopu}>{population}</div></div>
            <div className={styles.area}>Area<div className={styles.resarea}>{area}</div></div>
            <div className={styles.flag}>FLAG</div>
            <div className={styles.flagimg} style={style}  ></div>
            <div className={styles.activity}>ACTIVITIES</div>
            <div className={styles.activities}>{activities&&activities.map((el)=>el.map((el,i)=><div key={i}>
                                                    <div className={styles.Aname}>NAME</div><div className={styles.Aresname}>{el.name}</div>
                                                    <div className={styles.Adura}>DURATION</div><div className={styles.Aresdura}>{el.duration} Minutes</div>
                                                    <div className={styles.Adiff}>DIFFICULTY</div><div className={styles.Aresdiff}>{el.difficulty}</div>
                                                    <div className={styles.Aseas}>SEASON</div><div className={styles.Aresseas}>{el.season}</div>
            </div>))}
            </div>


    </div>
    )
}