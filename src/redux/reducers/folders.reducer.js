// Folders reducer

const foldersReducerDefaultState = [];

const folderReducer = (state = foldersReducerDefaultState, action) => {
	switch (action.type) {
		case "GET_USER_FOLDERS":
			return [...state, action.folders];
		default:
			return state;
	}
};


export default folderReducer