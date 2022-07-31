import {combineReducers} from 'redux'

import usersReducers from './Reducer';
import ReducerComments from './ReducerComments';
import Reducerpost from './Reducerpost';


const rootReducer=combineReducers({
    data: usersReducers,
    posts: Reducerpost,
    comments: ReducerComments,
});

export default rootReducer;