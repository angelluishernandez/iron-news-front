import IronNewsService from "../../services/IronNewsService";
import { alertActions } from "../actions/alert.actions";
import { setUser } from "../helpers/loginHelpers";

export const userLoginFetch = ({email, password}) => {
	console.log("This are the email and password on action generator =>", email, password)
	return dispatch => {
		return IronNewsService.login({email, password})
		.then(user => {
			if (!user) {
				console.log("The user has not been found");
			} else {
				setUser(user);
				dispatch(userLogin(user));
				
			}
		});
	};
};

const userLogin = user => ({
	type: "USER_LOGIN",
	payload: user,
});
