import * as types from './ActionType';

const initialState ={
    
    posts:[],
    post:{},
    loading: true
}

const Reducerpost=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_POST:
        

            return {
                ...state,
                posts:action.payload,
                loading:false

            };
            case types.DELETE_POST:

            return {
                ...state,
                loading:false

            };
           
               
        default:
            return state;
    }
}


export default Reducerpost;
