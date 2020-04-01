import IronNewsService from "../../services/IronNewsService";
import { alertActions } from "../actions/alert.actions";
import { setUser } from "../helpers/loginHelpers";

// Action generators
export const userLoginFetch = ({ email, password }) => dispatch => {
	IronNewsService.login({ email, password }).then(user => {
		if (!user) {
			console.log("The user has not been found");
		} else {
			localStorage.setItem("user", user ? JSON.stringify(user) : null)
			dispatch(setCurrentUser(user));
		}
	});
};



export const fetchLogout = () => {
	return dispatch => {
		return IronNewsService.logout().then(() => {
			setUser({});
			dispatch(userLogout());
		});
	};
};

// Actions

export const setCurrentUser = currentUser => ({
	
	type: "SET_CURRENT_USER",
	currentUser
});

const userLogout = () => ({ type: "LOGOUT_USER" });
