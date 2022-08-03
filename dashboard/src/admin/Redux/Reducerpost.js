import * as types from './ActionType';

const initialState ={
    
    posts:[],
    post:{},
    loading: true
}

const Reducerpost=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_POST':
        

            return {
                ...state,
                posts:action.payload.data,
                loading:false

            };
            case 'DELETE_POST':

            return {
                ...state,
                loading:false

            };
           
               
        default:
            return state;
    }
}


export default Reducerpost;
