import React, { createContext } from "react";
import IronNewsService from "../services/IronNewsService";

const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
	state = {
		user: JSON.parse(localStorage.getItem("user")),
		folders: [],
		updated: false,
		savedArticles: {},
		savedNews: [],
	};

	setUser = user => {
		localStorage.setItem("user", user ? JSON.stringify(user) : null);
		this.setState({ user });
	};
	logout = () => {
		IronNewsService.logout().then(() => {
			this.setUser();
		});
	};

	getUser = () => {
		const userId = this.state.user._id;

		IronNewsService.getUser(userId)
			.then(user => {
				this.setState({
					...this.state,
					user: user,
				});
			})
			.catch(error => console.log(error));
	};
	setUpdated = () => {
		this.setState({
			...this.state,
			updated: false,
		});
	};

	deleteFolder = (event, userId, folderId) => {
		event.preventDefault();
		const folderArray = this.state.folders.filter(
			folder => folder._id !== folderId
		);
		this.setState({
			folders: folderArray,
		});

		IronNewsService.deleteFolder(userId, folderId)
			.then(folder => console.log("this folder has been deleted=>", folder))
			.catch(error => console.log(error));
	};

	deleteNewsInFolder = (event, folderId, newsId) => {
		event.preventDefault();
		const newsArray = this.state.savedNews.filter(news => news._id !== newsId);
		this.setState({
			...this.state,
			savedNews: newsArray,
		});
		IronNewsService.deleteNewsInFolder(folderId, newsId)
			.then(news => console.log("This news has been deleted=>", news))
			.catch(error => console.log(error));
	};
	getFolders = () => {
		const userId = this.state.user._id;
		IronNewsService.listFolders(userId)
			.then(folders => {
				this.setState({
					...this.state,
					folders: [...folders],
				});
			})
			.catch(error => console.log(error));
	};

	componentDidMount() {
		if (this.state.user) {
			this.getFolders();
		}
	}

	render() {
		const value = {
			currentUser: this.state.user,
			setUser: this.setUser,
			logout: this.logout,
			folders: this.state.folders,
			deleteFolder: this.deleteFolder,
			setUpdated: this.setUpdated,
			getFolders: this.getFolders,
			getFolderNews: this.getFolderNews,
			deleteNewsInFolder: this.deleteNewsInFolder
		};
		return (
			<AuthContext.Provider value={value}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export const WithAuthConsumer = WrappedComponent => props => (
	<AuthContext.Consumer>
		{authProps => <WrappedComponent {...props} {...authProps} />}
	</AuthContext.Consumer>
);

export default AuthContext;
