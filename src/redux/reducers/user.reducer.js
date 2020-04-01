const initialState = {
	currentUser: {},
};

export const userReducer = (state = initialState, action) => {
	console.log("This the payload on reducer =>", action.payload)

	switch (action.type) {
		case "LOGIN_USER":
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};


