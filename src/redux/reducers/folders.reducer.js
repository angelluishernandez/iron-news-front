import {foldersConstants} from "../constants/constants"

const foldersReducerDefaultState = [{
	name: "", 
	description: "", 
	tags: ""
}];

export const folderReducer = (state = foldersReducerDefaultState, action) => {
	switch (action.type) {
		case foldersConstants.LIST_FOLDERS:
			return {
				folders: action.folders
			};
		default:
			return state;
	}
};


export default folderReducer