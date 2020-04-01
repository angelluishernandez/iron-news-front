import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import foldersReducer from "../reducers/folders.reducer";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/user.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({ folders: foldersReducer, currentUser: userReducer }),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
