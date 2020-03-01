import React from "react";
import "./SideBar.css";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import IronNewsService from "../../../services/IronNewsService";
class FolderExpandList extends React.Component {
	state = {
		activeCollapse: false,
		folders: [],
	};
	handleExpandCollapse = () => {
		this.state.activeCollapse
			? this.setState({ activeCollapse: false })
			: this.setState({ activeCollapse: true });
	};
	getFolders = () => {
		const userId = this.props.currentUser._id;
		IronNewsService.listFolders(userId)
			.then(folders => {
				console.log("this are the folders", folders)
				this.setState({
					...this.state,
					folders: [folders],
				});
				console.log("is getting here", this.state)
			})
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.getFolders()	
		console.log("component did mount", this.state)

	}
	render() {
		return (
			<li className="parent-list-item" onClick={this.handleExpandCollapse}>
				<h3>
					Folders
					{!this.state.activeCollapse ? (
						<i
							className="fas fa-arrow-circle-down"
							onClick={this.handleExpandCollapse}
						></i>
					) : (
						<i
							className="fas fa-arrow-circle-up"
							onClick={this.handleExpandCollapse}
						></i>
					)}
				</h3>
				{this.state.activeCollapse && (
					<ul className="collapsable-list">
						<li className="">
							{this.state.folders.map((folder, key)=> {
								return <h4 key={key}>{folder.name}</h4>
							})}
						</li>

						<h4>
							<Link to={`/folders/${this.props.currentUser.id}/createfolder`}>
								<AddBoxRoundedIcon /> Add a folder
							</Link>
						</h4>
					</ul>
				)}
			</li>
		);
	}
}

export default WithAuthConsumer(FolderExpandList);
