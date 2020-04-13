import { newsConstants } from "../constants/constants";

export const newsReducer = (state = {}, action) => {
	switch (action.type) {
		case newsConstants.FETCH_FOLDER_NEWS:
			return {
				news: action.news,
			};
		default:
			return state;
	}
};
