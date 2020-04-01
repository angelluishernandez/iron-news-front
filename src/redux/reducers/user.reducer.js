const initialState = {

};



const userReducer = (state = {initialState}, action) => {
	console.log("this is the action=> ", action)
	console.log("This the user on reducer =>", action.type);
	console.log("this is the payload", action.currentUser);
	console.log("this is the state, ", state);
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.currentUser,
				isAuthenticated: true,
			};
		// case "GET_CURRENT_USER": 
		// return {
		// 	...state, 
		// 	currentUser: JSON.parse(localStorage.getItem("user"))
		// }
		case "LOGOUT_USER":
			return {
				...state,
				currentUser: {},
			};
		default:
			return state;
	}
};

export default userReducer;
