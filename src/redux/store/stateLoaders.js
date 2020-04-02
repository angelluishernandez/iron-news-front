import { fromJS } from "immutable";

export const loadState = () => {
	try {
		const userData = localStorage.get("user");
		return userData === null ? undefined : fromJS(JSON.parse(userData));
	} catch (error) {
		return undefined;
	}
};

export const saveState = state => {
	try {
		let userData = JSON.stringify(state.toJS());
		localStorage.setItem("user", userData);
	} catch (error) {
		console.log(error);
	}
};
