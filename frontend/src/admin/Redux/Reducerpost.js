import * as types from './ActionType';

const initialState ={
    posts:[],
    post:{},
    
    loading: true
   
}

const Reducerpost = (state=initialState,action) => {
    switch(action.type){
        case types.GET_Post:
            return {
                ...state,
                posts:action.payload,
                loading:false

            };
            case types.DELETE_POST:
            case types.CONFIRM_POST:
            
            return {
                ...state,
                loading:false

            };
            case types.GET_SINGLE_POST:
                return {
                    ...state,
                    post:action.payload,
                    loading:false
    
                };

               
        default:
            return state;
    }
}

export default Reducerpost
