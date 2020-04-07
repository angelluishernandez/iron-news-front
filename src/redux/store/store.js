import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import {authentication} from "../reducers/user.reducer";
import {folderReducer} from "../reducers/folders.reducer"
import {sourcesReducer} from "../reducers/sources.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const createLoggerMiddleware = createLogger();
const rootReducer = combineReducers({
	authentication,
	folderReducer, 
	sourcesReducer
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, createLoggerMiddleware))
);


// console.log("Store=> ", store.getState());
