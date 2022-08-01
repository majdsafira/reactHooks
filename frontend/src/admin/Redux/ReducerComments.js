import * as types from './ActionType';

const initialState ={
    
    comments:[],
    comment:{},
    loading: true
}

const ReducerComments=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_COMMENT:
        

            return {
                ...state,
                comments:action.payload,
                loading:false

            };
            case types.DELETE_COMMENT:

            return {
                ...state,
                loading:false

            };
           
               
        default:
            return state;
    }
}


export default ReducerComments;