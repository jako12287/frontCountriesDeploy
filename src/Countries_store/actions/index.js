import { GETALL, GET_DETAILS, FILTER, FILTERCONT, 
         FILTERACTI, GETACTIVITIES, ORDER, PAGES, 
         PAGEE, MODAL} from "./types";
import axios from 'axios';


export const getDetail = (id)=>{
    return(dispatch)=>{
        axios.get(`https://appcountriesapi.herokuapp.com/countries/${id}`)
        .then(res=>res.data)
        .then(data => dispatch({
            type:GET_DETAILS,
            payload: data
        })).catch(e=>console.log(e))
    }
}
export const getCountries = ()=>{
    return async(dispatch)=>{
        let get = await axios.get('https://appcountriesapi.herokuapp.com/countries')
        dispatch({
            type: GETALL,
            payload: get.data
        })
    }
}
// export let getCountries = ()=>{
//    return(dispatch)=>{

//        axios.get('http://localhost:3001/countries')
//        .then(result=>result.data)
//        .then(data=>dispatch({
//            type: GETALL,
//            payload:data
//        }))
       
//     }

// }

export const filter = (value)=>{
    return async(dispatch)=>{
        let get = await axios.get(`https://appcountriesapi.herokuapp.com/countries?name=${value}`)
        dispatch({
            type: FILTER,
            payload: get.data
        })

    }
}

export const filterContinet = (value)=>{
        value = value.toLowerCase()
            return async(dispatch)=>{
                let get = await axios.get('https://appcountriesapi.herokuapp.com/countries')
                let fill = get.data.filter((el)=>el.continent.toLowerCase() === value)
                dispatch({
                    type: FILTERCONT,
                    payload: fill
                })
            }
        
}

export const filterActivity = (value)=>{
    value = value.toLowerCase()
         return async(dispatch)=>{
             let get = await axios.get(`https://appcountriesapi.herokuapp.com/activity?name=${value}`)
             let fill = get.data
             dispatch({
                 type: FILTERACTI,
                 payload : fill
             })
         }

}

export const getAllActivities = ()=>{
    return async(dispatch)=>{
        let get = await axios.get('https://appcountriesapi.herokuapp.com/activity')
        let data = get.data
        dispatch({
            type: GETACTIVITIES,
            payload : data
        })
    }
}

export const Order = (value)=>{
    return (dispatch)=>{
        dispatch({
            type: ORDER,
            payload: value
        })

    }
}

export const PageS = (value)=>{
    return (dispatch)=>{
        dispatch({
            type:PAGES,
            payload: value
        })
    }
}
export const PageE = (value)=>{
    return (dispatch)=>{
        dispatch({
            type:PAGEE,
            payload: value
        })
    }
}

export const ActivityPost = async(value)=>{
    try {
        
        let post =await fetch('https://appcountriesapi.herokuapp.com/activity',{
            method: 'POST',
            headers: {
                Accep: 'application/jason',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)
        })
        return post
    } catch (err) {
     console.log(err)   
    }
    
}

export const ModalCreate = (value)=>{
    return(dispatch)=>{
        dispatch({
            type:MODAL,
            payload: value
        })
    }
} 


 






