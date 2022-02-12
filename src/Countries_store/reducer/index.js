import { GETALL, GET_DETAILS, FILTER, FILTERCONT, 
         FILTERACTI, GETACTIVITIES, ORDER, PAGES, 
         PAGEE, MODAL} from "../actions/types";

let initialState = {
    countries:[],
    details:[],
    activity:[],
    getActivities:[],
    order:'',
    PS:0,
    PE:10,
    modal:false
    
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GETALL:
            return{
                ...state,
                countries: [...action.payload]
            } 

        case GET_DETAILS:
            return{
                ...state,
                details:[...action.payload]
            }
        
        case FILTER:
            return{
                ...state,
                countries:[...action.payload]
            }
        case FILTERCONT:
            return{
                ...state,
                countries:[...action.payload]
            }
        case FILTERACTI:
            return{
                ...state,
                countries:[...action.payload]
            }
        case GETACTIVITIES:
            return{
                ...state,
                getActivities:[...action.payload]
            }
        case ORDER:
            return{
                ...state,
                order:action.payload
            } 
        case PAGES:
            return{
                ...state,
                PS:action.payload
            }
        case PAGEE:
            return{
                ...state,
                PE:action.payload
            }
        case MODAL:
            return{
                ...state,
                modal:action.payload
            }
     

        default: 
            return state

    }

}