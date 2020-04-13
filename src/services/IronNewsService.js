import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

http.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.clear();
			window.location.assign("/login");
		}

		return Promise.reject(error);
	}
);

// const test = () => http.get("/findAllFolders")

// const home = user => http.get(`/`, user);
const landing = (category) => http.post(`/`, category);
const login = ({ email, password }) => http.post("/login", { email, password });
const logout = () => http.post("/logout");
const register = (data) => http.post("/register", data);
const getLatestNews = (data) => http.post("/news/top-headlines", data);
const getAllNews = (data) => http.post("/news/everything", data);
const searchSources = ({ language, category }) =>
	http.post("/sources/get-sources", { language, category });
const getUserSources = (userId) => http.get(`/sources/${userId}`);
const editUser = (user, id) => http.patch(`/user/${id}`, user);
const listNewsInFolder = (folderId) =>
	http.get(`/folder/${folderId}/newslist`, folderId);
const addNewsToFolder = (article, folderId) =>
	http.post(`/news/${folderId}`, article, folderId);
const createFolder = ({ name, description, tags }, userId) =>
	http.post(`/folders/${userId}/newfolder`, { name, description, tags });
const addSourcesToUser = (sources, userId) =>
	http.post(`/sources/${userId}/addsources`, sources);
	
const deleteNewsItem = (id, newsId) =>
	http.delete(`/news/${id}/${newsId}`, id, newsId);

const getNewsFromSource = (sourceName, sourceId, userId) =>
	http.post(`/sources/${userId}/${sourceId}`, { sourceId });
const listFolders = (userId) => http.get(`/folders/${userId}`, userId);
const getUser = (userId) => http.get(`/user/${userId}`, userId);
const deleteFolder = (userId, folderId) =>
	http.delete(`/folders/${userId}/${folderId}/deletefolder`, userId, folderId);

export default {
	login,
	logout,
	register,
	// home,
	getLatestNews,
	landing,
	editUser,
	createFolder,
	listFolders,
	getUser,
	deleteFolder,
	getAllNews,
	addNewsToFolder,
	listNewsInFolder,
	searchSources,
	addSourcesToUser,
	getUserSources,
	getNewsFromSource,
	deleteNewsItem,
	// test
};
