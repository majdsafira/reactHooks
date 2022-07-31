import {combineReducers} from 'redux'

import usersReducers from './Reducer';
import Reducerpost from './Reducerpost';


const rootReducer=combineReducers({
    data: usersReducers,
    posts: Reducerpost,
});

export default rootReducer;