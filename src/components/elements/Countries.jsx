import React, { useEffect } from 'react'
import styles from '../elements_CSS/Countries.module.css'
import { Country } from './Country'
import { Loading } from './Loading'
import { getCountries, getAllActivities } from '../../Countries_store/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Countries = ()=>{

    const dispatch = useDispatch()
    const $countries = useSelector((state)=>state.countries)
    const $order = useSelector((state)=>state.order)
    let $PS = useSelector((state)=>state.PS)
    let $PE = useSelector((state)=>state.PE)
    if($PE >= 279 && $PS >= 243){
        $PE = 279
        $PS = 243
    }
    if($PE < 9  && $PS < 0){
        $PE = 9
        $PS = 0
    }
    let order;
        if($order === 'AZ'){
            order = (a,b)=>{
            if(a.name < b.name)return -1
            if(a.name > b.name)return 1
            return 0
           }
         }
        if($order === 'ZA'){
            order = (a,b)=>{
            if(a.name < b.name)return 1
            if(a.name > b.name)return -1
            return 0
           }
        }
        if($order === 'POP+'){
            order = (a,b)=>{
                if(a.population < b.population)return 1
                if(a.population > b.population)return -1
                return 0
            }

        }
        if($order === 'POP-'){
            order = (a,b)=>{
                if(a.population < b.population)return -1
                if(a.population > b.population)return 1
                return 0
            }

        }
       
      

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getAllActivities())
   },[dispatch])

    return(
        <section className={styles.container}>
           {$countries.length?$countries.sort(order).slice($PS,$PE).map((el)=><div className={styles.layer} key={el.id}><Country key={el.id}
                                          id={el.id}
                                          image={el.imageflag}
                                          name={el.name}
                                          continent={el.continent} 
           ></Country></div>):<Loading/>}
        </section>
    )
}

