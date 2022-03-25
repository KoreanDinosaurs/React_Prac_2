import {createStore, combineReducers} from "redux";
import data from "./modules/data";

const rootReducer = combineReducers({data});

const store = createStore(rootReducer);

export default store;