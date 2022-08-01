import * as types from './ActionType';

const initialState ={
    
    products:[],
    product:{},
    loading: true
}
const ReducerProduct=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
        

            return {
                ...state,
                products:action.payload,
                loading:false

            };
            case types.DELETE_PRODUCT:

            return {
                ...state,
                loading:false

            };
           
               
        default:
            return state;
    }
}


export default ReducerProduct;