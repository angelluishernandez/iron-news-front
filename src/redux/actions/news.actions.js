import { newsConstants } from "../constants/constants";
import IronNewsService from "../../services/IronNewsService";

//----------------------ACTION GENERATORS----------------------//

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

//----------------------EXPORTS----------------------//

export const newsActions = {
	fetchNewsInFolder,
	deleteNewsInFolder,
};
