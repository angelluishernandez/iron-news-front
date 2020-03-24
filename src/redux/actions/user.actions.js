import IronNewsService from "../../services/IronNewsService";

// GET USER

export const getUser = () => {
	return dispatch => {
		return IronNewsService.getUser().then();
	};
};
