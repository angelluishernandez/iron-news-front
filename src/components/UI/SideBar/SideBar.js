import React from "react";
import "./SideBar.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import NewsExpandList from "./NewsExpandList";
import FolderExpandList from "./FoldersExpandList";
import UserViewSideBar from "../UserViewSideBar/UserViewSideBar";
import IronNewsService from "../../../services/IronNewsService";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
class SideBar extends React.Component {
	state = {
		folders: [],
		activeCollapseFolders: false,
		activeCollapseNews: false,
		user: {},
	};
	handleExpandCollapseFolders = () => {
		this.setState(prevState => ({
			...this.state,
			activeCollapseFolders: !prevState.activeCollapseFolders,
		}));
	};

	handleExpandCollapseNews = () => {
		this.setState(prevState => ({
			...this.state,
			activeCollapseNews: !prevState.activeCollapseNews,
		}));
	};
	getFolders = () => {
		console.log("entra en get folders");
		const userId = this.props.currentUser._id;
		IronNewsService.listFolders(userId)
			.then(folders => {
				this.setState({
					...this.state,
					folders: [...folders],
				});
			})
			.catch(error => console.log(error));
	};

	getUser = () => {
		const userId = this.props.currentUser._id;

		IronNewsService.getUser(userId)
			.then(user => {
				this.setState({
					...this.state,
					user: user,
				});
			})
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.getFolders();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			console.log("entra en component did update");
			this.getFolders();
			this.getUser();
		}

		if ({ ...prevState.folders } !== { ...this.state.folders }) {
		}
	}

	deleteFolder = (event, userId, folderId) => {
		event.preventDefault();
		const folderArray = this.state.folders.filter(
			folder => folder._id !== folderId
		);
		this.setState({
			folders: folderArray,
		});

		IronNewsService.deleteFolder( userId, folderId)
			.then(folder => console.log("this folder has been deleted=>", folder))
			.catch(error => console.log(error));
	};
	render() {
		return (
			<div className="SideBar" id="sidebar">
				<UserViewSideBar user={this.state.user} />
				<MenuOpenIcon
					className="closebtn"
					id="closebtn"
					onClick={this.props.handleClose}
				></MenuOpenIcon>
				<div className="h-100">
					<ul>
						<li className="parent-list-item">
							<h3>Home</h3>
						</li>
						<br />
						<NewsExpandList
							handleCollapse={this.handleExpandCollapseNews}
							activeCollapse={this.state.activeCollapseNews}
						/>
						<br />
						<FolderExpandList
							handleCollapse={this.handleExpandCollapseFolders}
							folders={this.state.folders}
							activeCollapse={this.state.activeCollapseFolders}
							deleteFolder={this.deleteFolder}
							userId={this.props.currentUser._id}
						/>
					</ul>
				</div>
			</div>
		);
	}
}

export default WithAuthConsumer(SideBar);
