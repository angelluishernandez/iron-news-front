import React from "react";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import { folderActions } from "../../redux/actions/folders.actions";
import NewNavbar from "./NavBar/NewNavbar";
import NewSideBar from "./SideBar/NewSideBar";

class Layout extends React.Component {
	state = {
		isFoldersExpanded: false,
		isNewsExpanded: false,
	};

	//----------------------component lifecycle----------------------//
	componentDidMount() {
		const { _id } = this.props.currentUser;
		this.props.fetchFolders(_id);
	}

	//----------------------handle dropdown----------------------//
	handleExpandCollapseFolders = () => {
		this.setState((prevState) => ({
			...this.state,
			isFoldersExpanded: !prevState.isFoldersExpanded,
		}));
	};

	handleExpandCollapseNews = () => {
		this.setState((prevState) => ({
			...this.state,
			isNewsExpanded: !prevState.isNewsExpanded,
		}));
	};

	openNav() {
		document.getElementById("sidebar").style.width = "400px";
		// document.getElementById("navbar").style.marginLeft = "400px";
	}

	closeNav() {
		document.getElementById("sidebar").style.width = "0";
		// document.getElementById("navbar").style.marginLeft = "0";
	}

	//----------------------logout----------------------//

	handleLogout = () => {
		this.props.logout();
		this.props.history.push("/login");
	};

	//----------------------handle delete folder----------------------//

	handleDeleteFolder = (currentUserId, folderId) => {
		this.props.deleteFolder(currentUserId, folderId);
	};

	//----------------------render----------------------//

	render() {
		return (
			<div className="Layout">
				{/* <NavBar
					handleOpen={this.openNav}
					currentUserId={this.props.currentUser._id}
					handleLogout={this.handleLogout}
					profilePic={this.props.currentUser.profilePic}
				></NavBar> */}
				<NewNavbar
					handleOpen={this.openNav}
					currentUserId={this.props.currentUser._id}
					handleLogout={this.handleLogout}
					profilePic={this.props.currentUser.profilePic}
				/>
				{/* <NewSideBar
					
				/> */}

				{/* <SideBar
					handleClose={this.closeNav}
					handleExpandCollapseFolders={this.handleExpandCollapseFolders}
					handleExpandCollapseNews={this.handleExpandCollapseNews}
					isNewsExpanded={this.state.isNewsExpanded}
					isFoldersExpanded={this.state.isFoldersExpanded}
					currentUser={this.props.currentUser}
					folders={this.props.folders}
					handleDeleteFolder={this.handleDeleteFolder}
				></SideBar> */}
			</div>
		);
	}
}

//----------------------redux----------------------//

const mapStateToProps = (state) => {
	return {
		currentUser: state.authentication.user,
		folders: state.folderReducer.folders,
	};
};

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(userActions.logout()),
	fetchFolders: (id) => dispatch(folderActions.fetchFolders(id)),
	deleteFolder: (currentUserId, folderId) =>
		dispatch(folderActions.deleteFolder(currentUserId, folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
