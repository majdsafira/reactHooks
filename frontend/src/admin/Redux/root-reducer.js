import {combineReducers} from 'redux'
import ReducerProduct from './ReduceProduct';

import usersReducers from './Reducer';
import ReducerComments from './ReducerComments';
import Reducerpost from './Reducerpost';


const rootReducer=combineReducers({
    data: usersReducers,
    posts: Reducerpost,
    comments: ReducerComments,
    products: ReducerProduct,
});

export default rootReducer;