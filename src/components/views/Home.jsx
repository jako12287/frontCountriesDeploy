import styles from '../elements_CSS/Home.module.css'
import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Countries}  from '../elements/Countries'
import {Footer} from '../views/Footer'
import { filter, filterContinet, Order, PageE, PageS} from '../../Countries_store/actions'
import { useDispatch, useSelector} from 'react-redux'
import { Activities } from '../elements/Activities'





export const Home = ()=>{
    const dispatch = useDispatch()
    let $PE = useSelector((state)=>state.PE)
    let $PS = useSelector((state)=>state.PS)
    let $countries = useSelector((state)=>state.countries)
    let $activities = useSelector((state)=>state.getActivities)

    const [open, setOpen] = useState({menu:false})
    const [search, setSearch] = useState({
                                          filname:'', 
                                          filcontinent:'',
                                          pageStart:0,
                                          pageEnd:10
                                        })

    const handlechange = (e)=>{
        e.preventDefault()
        setSearch((prev)=>({...prev,
                   [e.target.name]:e.target.value,
                
                  }))
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(e.target.value){
            dispatch(filter(search.filname))
            setSearch((prev)=>({
                ...prev,
                pageStart:0,
                pageEnd: 10
            }))
            dispatch(PageS(search.pageStart))
            dispatch(PageE(search.pageEnd))
        }
        
    }

   

    const handleSubmitContinent = (e)=>{
        e.preventDefault()
        if(e.target.value){
            dispatch(filterContinet(search.filcontinent))
            setSearch((prev)=>({
                ...prev,
                pageStart:0,
                pageEnd: 10
            }))
            dispatch(PageS(search.pageStart))
            dispatch(PageE(search.pageEnd))
        }

    }

    const handleOrder = (e)=>{
        e.preventDefault()
        dispatch(Order(e.target.value))   
    }

    const handleReset = (e)=>{
        e.preventDefault()
        if(e.target.value){
            dispatch(filter(''))
            setSearch((prev)=>({
                ...prev,
                filname:'',
                pageStart:0,
                pageEnd: 10
            }))
            dispatch(PageS(search.pageStart))
            dispatch(PageE(search.pageEnd))
            dispatch(Order(''))

            
        }
        
        
    }

    const handlePage = (e)=>{
        e.preventDefault()
        if(e.target.value === 'p+'){
            setSearch((prev)=>({
               ...prev,
               pageStart:search.pageStart + 10,
               pageEnd:search.pageEnd + 10

            }))
        }
        if(e.target.value === 'p-'){
            setSearch((prev)=>({
                ...prev,
                pageStart:search.pageStart - 10,
                pageEnd:search.pageEnd - 10
            }))
        }
    }
    const handleMenu = (e)=>{
        if(!open.menu){
            setOpen({
                menu:true
            })
        }else{

            setOpen({
                
                menu:false
            })
        }
    }
    let change = (open.menu)?styles.menu:styles.menuclose 
    let PS = search.pageStart
    let PE = search.pageEnd

    useEffect(()=>{
        dispatch(PageS(PS))
        dispatch(PageE(PE))
    },[search.pageEnd, search.pageStart,PE,PS,dispatch])

    let Hidden = (!search.filcontinent)?true:false
    let HiddenPageB = ($PS < 1)?true:false
    let HiddenPageN = ($PE >= $countries.length)?true:false
    
    return(
        <article className={styles.container}>
          <section className={styles.header}>
             <Link className={styles.link}  to='/create_activities'><button className={styles.create}>Create Activities</button></Link>
                <form className={styles.form}>
                    <input id='inputCountry'type='text' placeholder='🔎 Country...' name='filname' value={search.filname} onChange={handlechange}></input>
                    <input type='submit'value='Search' onClick={handleSubmit}/>
                    <button onClick={handleReset} name='reset' value='reset'>Reset</button>
                </form>
             
              <div className={change}>
                       <h4>Filter countries for:</h4>
                        <h4>CONTINENT</h4>
                        <select onChange={handlechange} onSubmit={handleSubmitContinent} name='filcontinent' value={search.filcontinent}>
                            <option hidden={true}>--SELECT CONTINENT--</option>
                            <option>ASIA</option>
                            <option>ANTARCTICA</option>
                            <option>AFRICA</option>
                            <option>EUROPE</option>
                            <option>NORTH AMERICA</option>
                            <option>OCEANIA</option>
                            <option>SOUTH AMERICA</option>
                        </select>
                        <input className={styles.search} hidden={Hidden} type='submit'value='Search Continent' onClick={handleSubmitContinent}/>

                        <h4>ACTIVITY</h4>
                        
                        {(!$activities)?'No activities yet':<Activities/>}
                        <h4>Order countries for:</h4>
                       <h4>Alphabet</h4>
                        <button className={styles.alpha} type='submit'value='AZ' name='order' onClick={handleOrder}>A-Z</button>
                        <button className={styles.alpha} type='submit'value='ZA' name='order' onClick={handleOrder}>Z-A</button>
                        
                        <h4>Population</h4>
                        <button type='submit'value='POP+' name='order' onClick={handleOrder}>Population +</button>
                        <button type='submit'value='POP-' name='order' onClick={handleOrder}>Population -</button>
              </div>

                <div className={styles.pg}>{($countries.length)?Math.ceil($PE/10):0} DE {Math.ceil($countries.length/10)}</div>

                <form>
                <button className={styles.back} disabled={HiddenPageB} value='p-' onClick={handlePage}>{`⇐`}</button>
                <button className={styles.next} disabled={HiddenPageN} value='p+' onClick={handlePage}>{`⇒`}</button>
                </form>
          </section>
          <section className={styles.main}>

             <Countries/>
             <button className={styles.btn_menu} onClick={handleMenu}>
                 <div></div>
             </button>
          </section>
          <section className={styles.footer}>
             <Footer/>
          </section>
        </article>
    )
}





