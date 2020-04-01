import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import foldersReducer from "../reducers/folders.reducer";
import thunk from "redux-thunk";
import userReducer from "../reducers/user.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState =  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}

export default () => {
	
	const store = createStore(
	combineReducers({
		 userState: userReducer
	}), 
	persistedState, 
	composeEnhancers(applyMiddleware(thunk))
)

return store};

// console.log("Store=> ", store.getState());


