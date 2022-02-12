import React from 'react'
import { filterActivity, PageS,PageE } from '../../Countries_store/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Activities = ()=>{
    const $activities = useSelector((state)=>state.getActivities)
    const dispatch = useDispatch()
    
    let handleClick = (e)=>{
        let activity = e.target.name
            dispatch(filterActivity(activity))
            dispatch(PageS(0))
            dispatch(PageE(10))
        
    }



    return(
        <>
               {$activities.map((el)=><button style={{boxShadow:'2px 2px 2px #ffffff70', border:'none'}} key={el.id} name={el.name} onClick={handleClick}>{el.name}</button>)}
        </>
    )
}