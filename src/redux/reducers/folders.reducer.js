// Folders reducer

const foldersReducerDefaultState = [{
	name: "", 
	description: "", 
	tags: ""
}];

const folderReducer = (state = foldersReducerDefaultState, {type, payload}) => {
	console.log(payload)
	switch (type) {
		case "GET_FOLDERS":
			return payload;
		default:
			return state;
	}
};


export default folderReducer