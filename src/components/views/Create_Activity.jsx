import React,{ useEffect, useState} from 'react'
import styles from '../elements_CSS/Create_Activity.module.css'
import { Modal } from '../elements/Modal'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getCountries, ActivityPost, getAllActivities, ModalCreate } from '../../Countries_store/actions'

export const CreateActivity = ()=>{
    let [act, setAct] = useState({
        name:'',
        difficulty:1,
        duration:30,
        season:'SPRING',
        countryID:[]
    })
    const dispatch = useDispatch() 
    let $countries = useSelector((state)=>state.countries)
    let $activities = useSelector((state)=>state.getActivities)
    let $modal = useSelector((state)=>state.modal)
    
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getAllActivities())               
    },[dispatch])
    
    let handleChange = (e)=>{
        e.preventDefault()
            setAct((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
              }))
    }
    
    let handleCountries = (e)=>{
        if(act.countryID.includes(e.target.value)){
            
        }else{

            setAct((prev)=>({
                ...prev,
                countryID:[...act.countryID,e.target.value]
            }))
        }
    }
    let handleClickDelete = (e)=>{
        e.preventDefault()
        let arr = act.countryID.filter((el)=>el !== e.target.value)
        setAct((prev)=>({
            ...prev,
            countryID:[...arr]
        }))
    }
    let handleSubmit = async(e)=>{
       e.preventDefault()
       let op = $activities.map(el=>el.name)
       let fil = op.filter((el)=>el.toLowerCase() === act.name.toLowerCase())
       if(!act.name){alert('name no found')}
       if(fil.length > 0){return alert('the name exist!!!')}
       if(act.countryID.length === 0){
           alert('country no add yet')
        }else{

            ActivityPost(act)
            setAct(()=>({
                name:'',
                difficulty:1,
                duration:30,
                season:'SPRING',
                countryID:[]
            }))
            dispatch(ModalCreate(true))
            
        }
    }
    
    if($modal){
        return(
            <Modal/>
        )
    }else{

        return(
            
            <div className={styles.container}>
        
         <div className={styles.header}>
           <Link className={styles.link} to='/home'><button className={styles.btn_home}>{`⇐ HOME`}</button></Link>
         </div>

         <div>

            <h5 className={styles.title}>Creating an activity</h5>
            <form>
            <label className={styles.name}>Name Activity</label><br/>
            <input className={styles.name_input} placeholder=' name...' name='name' value={act.name} onChange={handleChange}/>
            <label className={styles.diff}>Difficulty</label>
            <select className={styles.diff_select}  name='difficulty' value={act.difficulty} onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <label className={styles.dura}>Duration in minutes</label>
            <select className={styles.dura_input} name='duration' value={act.duration} onChange={handleChange}>
                <option>30</option>
                <option>60</option>
                <option>90</option>
                <option>120</option>
            </select>
            <label className={styles.seas}>Season</label>
            <select className={styles.seas_input} name='season' value={act.season} onChange={handleChange}>
                <option>SPRING</option>
                <option>SUMMER</option>
                <option>AUTUMN</option>
                <option>WINTER</option>
            </select>
            <label className={styles.pract}>In what countries is it practiced?</label>
        <article className={styles.mark}>

            <div className={styles.container_countries}>
            <select className={styles.selectC} multiple={true} name='countryID' value={[]} onChange={handleCountries}>
            {$countries.map((el)=><option className={styles.optionC} style={{backgroundImage:`url(${el.imageflag}`,
                                                  backgroundRepeat: 'no-repeat',
                                                  backgroundSize: 'cover',
                                                  backgroundColor: '#000000',}}
                                          key={el.id}>{el.id}</option>)}

            </select>
             <div className={styles.add_count}>
                <h4>countries selectd</h4>
                {act.countryID.map((el)=><button className={styles.addC} key={el} value={el} onClick={handleClickDelete}>{el}  X</button>)}
             </div>
            </div>
        </article>
            <button className={styles.btn_submit} name='create' onClick={handleSubmit}>CREATE</button>
            </form>
         </div>
        </div>
    )
  }
}

