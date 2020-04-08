import { sourcesConstants } from "../constants/constants";

export const sourcesReducer = (state = {}, action) => {
	switch (action.type) {
		case sourcesConstants.FETCH_SOURCES:
			return {
				sources: action.sources,
			};
		case sourcesConstants.ADD_SOURCE:
			return {
				selected: [...state.selected],
			};
		default:
			return state;
	}
};
