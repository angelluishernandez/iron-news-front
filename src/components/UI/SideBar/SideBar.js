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
		user: {}
	};
	handleExpandCollapseFolders = () => {
		this.setState(prevState=> ({
			...this.state,
			activeCollapseFolders: !prevState.activeCollapseFolders,
		}));
	};

	handleExpandCollapseNews = () => {
		this.setState(prevState=> ({
			...this.state,
			activeCollapseNews: !prevState.activeCollapseNews,
		}));
	};
	getFolders = () => {
		const userId = this.props.currentUser._id;
		IronNewsService.listFolders(userId)
			.then(folders => {
				console.log("this are the folders", folders);
				this.setState({
					...this.state,
					folders: [folders],
				});
				console.log("is getting here", this.state);
			})
			.catch(error => console.log(error));
	};

	getUser= () => {
		const userId = this.props.currentUser._id;
		console.log("entra en getUSer")
		IronNewsService.getUser(userId).then(user=> {
			this.setState({
				...this.state, 
				user: user
			})
		}).catch(error=> console.log(error))
	}

	componentDidMount() {
		this.getFolders();
		console.log("component did mount", this.state);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.currentUser !== this.props.currentUser) {
			this.getFolders();
			this.getUser()
		}
		if(prevState.user !== this.state.user){
			
		}
	}
	render() {
		return (
			<div className="SideBar" id="sidebar">
				<UserViewSideBar user={this.state.user}/>
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
						/>
					</ul>
				</div>
			</div>
		);
	}
}

export default WithAuthConsumer(SideBar);
