import { newsConstants } from "../constants/constants";
import IronNewsService from "../../services/IronNewsService";

//----------------------ACTION GENERATORS----------------------//

const fetchNewsInHome = (category) => {
	console.log(category);
	return (dispatch) =>
		IronNewsService.landing(category).then((news) => {
			return dispatch(getNewsInHome(news.articles));
		});
};

const fetchNewsInFolder = (folderId) => {
	return (dispatch) => {
		IronNewsService.listNewsInFolder(folderId).then((news) => {
			dispatch(getNewsInFolder(news));
		});
	};
};

const deleteNewsInFolder = (id, newsId, folderId) => {
	return (dispatch) => {
		IronNewsService.deleteNewsItem(id, newsId).then(() => {
			dispatch(fetchNewsInFolder(folderId));
		});
	};
};

//----------------------ACTION TYPES----------------------//

const getNewsInFolder = (news) => ({
	type: newsConstants.FETCH_FOLDER_NEWS,
	news,
});

const getNewsInHome = (news) => ({
	type: newsConstants.FETCH_HOME_NEWS,
	news,
});

//----------------------EXPORTS----------------------//

export const newsActions = {
	fetchNewsInHome,
	fetchNewsInFolder,
	deleteNewsInFolder,
};
