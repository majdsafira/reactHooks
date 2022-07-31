import {createStore,applyMiddleware} from "redux";
import logger  from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";


const middlewares = [reduxThunk];


if (process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}


const Store =createStore(rootReducer,applyMiddleware(...middlewares));
export default Store;