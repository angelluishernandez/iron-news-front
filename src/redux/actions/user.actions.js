import IronNewsService from "../../services/IronNewsService";
import { alertActions } from "../actions/alert.actions";
import { setUser } from "../helpers/loginHelpers";
import { userConstants } from "../constants/constants";
import { history } from "../../helpers/history";

//----------------------ACTION GENERATORS----------------------//

//----------------------Login----------------------//

const doLogin = ({ email, password }) => {
	return dispatch => {
		dispatch(request({ email }));
		IronNewsService.login({ email, password }).then(
			user => {
				dispatch(success(user));
				history.push("/");
				localStorage.setItem("user", user ? JSON.stringify(user) : null)
			},
			error => {
				dispatch(failure(error));
				dispatch(alertActions.error(error));
			}
		);
	};
};

//----------------------Logout----------------------//

const logout = () => {
	IronNewsService.logout()
	return{
		type: userConstants.LOGOUT
	}
}

//----------------------ACTION TYPES----------------------//

const request = user => {
	return { type: userConstants.LOGIN_REQUEST, user };
};
const success = user => {
	return {
		type: userConstants.LOGIN_SUCCESS,
		user,
	};
};

const failure = error => {
	return {
		type: userConstants.LOGIN_FAILURE,
		error,
	};
};

//----------------------EXPORTS----------------------//

export const userActions = {
	doLogin,
	logout
};






// // Action generators
// export const userLoginFetch = ({ email, password }) => dispatch => {
// 	IronNewsService.login({ email, password }).then(user => {
// 		if (!user) {
// 		} else {
// 			console.log("USER", user)
// 			localStorage.setItem("user", user ? JSON.stringify(user) : null);
// 			dispatch(setCurrentUser(user));
// 		}
// 	});
// };

// export const fetchLogout = () => {
// 	return dispatch => {
// 		return IronNewsService.logout().then(() => {
// 			setUser({});
// 			dispatch(userLogout());
// 		});
// 	};
// };

// // Actions

// export const setCurrentUser = currentUser => ({
// 	type: "SET_CURRENT_USER",
// 	currentUser,
// });

// const userLogout = () => ({ type: "LOGOUT_USER" });
