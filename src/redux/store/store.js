import { createStore, applyMiddleware, combineReducers } from "redux";
import foldersReducer from "../reducers/folders.reducer";
import thunk from "redux-thunk";

const configStore = () => {
	const store = createStore(
		combineReducers(
			{
				folders: foldersReducer,
			},
			applyMiddleware(thunk)
		)
	);
	return store;
};

export default configStore