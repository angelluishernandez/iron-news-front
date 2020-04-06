import IronNewsService from "../../services/IronNewsService";
import { foldersConstants } from "../constants/constants";

//----------------------ACTION GENERATORS----------------------//

//----------------------Get user's folders----------------------//

const fetchFolders = id => {
	return dispatch => {
		IronNewsService.listFolders(id).then(folders => {
			dispatch(getAllFolders(folders));
		});
	};
};

//----------------------Delete folder----------------------//

const deleteFolder = (currentUserId, folderId) => {
	return dispatch => {
		IronNewsService.deleteFolder(currentUserId, folderId).then(() => {
			dispatch(fetchFolders(currentUserId));
		});
	};
};

//----------------------Select folder----------------------//


//----------------------ACTION TYPES----------------------//

const getAllFolders = folders => ({
	type: foldersConstants.LIST_FOLDERS,
	folders,
});

//----------------------EXPORTS----------------------//

export const folderActions = {
	fetchFolders,
	deleteFolder
};

// ADD USER FOLDER

// EDIT USER FOLDERS

// REMOVE USER FOLDERS
