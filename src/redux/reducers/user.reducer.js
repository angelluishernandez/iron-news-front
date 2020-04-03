import { userConstants } from "../constants/constants";
let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : {};



export const authentication = (state = initialState, action) => {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return {
				loggedIn: true,
				user: action.user,
			};
		case userConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user,
			};
		case userConstants.LOGIN_FAILURE:
			return {};
		case userConstants.LOGOUT:
			return {};
		default:
			return state;
	}
};

// const initialState = {};

// const userReducer = (state = { initialState }, action) => {
// 	switch (action.type) {
// 		case "SET_CURRENT_USER":
// 			return {
// 				...state,
// 				currentUser: action.currentUser,
// 				isAuthenticated: true,
// 			};
// 		// case "GET_CURRENT_USER":
// 		// return {
// 		// 	...state,
// 		// 	currentUser: JSON.parse(localStorage.getItem("user"))
// 		// }
// 		case "LOGOUT_USER":
// 			return {
// 				...state,
// 				currentUser: {},
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default userReducer;
