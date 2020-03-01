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
const login = ({ email, password }) => http.post("/login", { email, password });
const logout = () => http.post("/logout");
const register = data => http.post("/register", data);
const getLatestNews = (data) => http.post("/news/top-headlines", (data))
const landing = (category) => http.post(`/`, category)
export default { 
	login,
	logout,
	register,
	home,
	getLatestNews,
	landing
};
