import IronNewsService from "../../services/IronNewsService";
import { sourcesConstants, userConstants } from "../constants/constants";

// FETCH_SOURCES
//----------------------ACTION GENERATORS----------------------//

//----------------------Fetch sources from API----------------------//

// FETCH SOURCES FROM API

const fetchSources = ({language, category}) => {
	console.log(language, category)
	return (dispatch) => {
		IronNewsService.searchSources({language, category})
			.then((sources) => {
			dispatch(getSources(sources));
		});
	};
};

// FETCH USER SOURCES

const fetchUserSources = (userId) =>  {
	return dispatch=> {
		IronNewsService.getUserSources(userId).then(sources=> {
			dispatch(getUserSources(sources))
		})
	}
}

// ADD_SOURCE

const selectSource = (source) => ({
	type: sourcesConstants.ADD_SOURCE,
	source,
});



//----------------------ACTION TYPES----------------------//

const getSources = (sources) => ({
	type: sourcesConstants.FETCH_SOURCES,
	sources,
});

// GET USER SOURCES

const getUserSources = (sources) => ({
	type: sourcesConstants.FETCH_USER_SOURCES, 
	sources 
})


//----------------------EXPORTS----------------------//

export const sourcesActions = {
	fetchSources,
	selectSource,
	fetchUserSources
};
