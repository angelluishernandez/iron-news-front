import IronNewsService from "../../services/IronNewsService";

// Get folders action generator

export const getUserFolders = () => {
	return dispatch => {
		
		return IronNewsService.test()
			.then(folders => {
				dispatch({ type: "GET_FOLDERS", payload: folders });
			})
			.catch(error => console.log(error));
	};
};

// ADD USER FOLDER

// EDIT USER FOLDERS

// REMOVE USER FOLDERS


