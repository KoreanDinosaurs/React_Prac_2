import {createStore, combineReducers, applyMiddleware} from "redux";
import data from "./modules/data";
import thunk from "redux-thunk"

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({data});

const store = createStore(rootReducer, enhancer);


export default store;