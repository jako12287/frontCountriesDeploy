import React, { useEffect } from 'react'
import styles from '../elements_CSS/Detail_country.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../Countries_store/actions'
import { Details } from '../elements/CardDetail'
import { Footer } from '../views/Footer'
import { Loading } from '../elements/Loading'


export const DetailCountry = ()=>{
    const idP = useParams().id
    const dispatch = useDispatch()
    let $detail = useSelector((state)=>state.details)
    const Activities = $detail.map(el=>el.activities.map((d)=>{
                                                return{
                                                         id:d.id,
                                                         name:d.name,
                                                         difficulty:d.difficulty,
                                                         duration:d.duration,
                                                         season:d.season
                                                         }}))
    const $Activities =   Activities.map((el)=>el.map((el)=>{return{
        name:el.name,
        difficulty:el.difficulty,
        duration:el.duration,
        season:el.season
}}))


    useEffect(()=>{
        dispatch(getDetail(idP))
    },[dispatch,idP])

  
    return(
        <div className={styles.container}>
          
          <div className={styles.header}>
            <Link className={styles.link} to='/home'><button>{`⇐ HOME`}</button></Link>
          </div>

          <div className={styles.main}>

            {(!$detail.length)?<Loading/>:$detail.map((el)=><Details key={el.id}
                                        id={el.id} 
                                        name={el.name} 
                                        continent={el.continent} 
                                        image={el.imageflag} 
                                        capital={el.capitalcity} 
                                        population={el.population}
                                        subregion={el.subregion} 
                                        area={el.area} 
                                        activities={$Activities}

                                        />)}
          </div> 
        </div>
    )
}
        