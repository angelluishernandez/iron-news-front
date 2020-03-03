import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

http.interceptors.response.use(
	response => response.data,
	error => {
		if (error.response && error.response.status === 401) {
			localStorage.clear();
			window.location.assign("/login");
		}

		return Promise.reject(error);
	}
);
const home = user => http.get(`/`, user);
const landing = category => http.post(`/`, category);
const login = ({ email, password }) => http.post("/login", { email, password });
const logout = () => http.post("/logout");
const register = data => http.post("/register", data);
const getLatestNews = data => http.post("/news/top-headlines", data);
const getAllNews = data => http.post("/news/everything", data);
const editUser = (user, id) => http.patch(`/user/${id}`, user);
const createFolder = ({ name, description, tags }, userId) =>
	http.post(`/folders/${userId}/newfolder`, { name, description, tags });
const listFolders = userId => http.get(`/folders/${userId}`, userId);
const getUser = userId => http.get(`/user/${userId}`, userId);
const deleteFolder = (userId, folderId) =>
	http.delete(`/folders/${userId}/${folderId}/deletefolder`, userId, folderId);
const addNewsToFolder = (
	{ content, description, publishedAt, source, title, url, urlToImage },
	folderId
) => http.post(`/news/${folderId}`);
export default {
	login,
	logout,
	register,
	home,
	getLatestNews,
	landing,
	editUser,
	createFolder,
	listFolders,
	getUser,
	deleteFolder,
	getAllNews,
	addNewsToFolder,
};
