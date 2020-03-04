import React from "react";
import "./SideBar.css";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import DeleteIcon from "../DeleteIcon";
const FolderExpandList = props => {
	return (
		<li className="parent-list-item">
			<h3>
				Folders
				{!props.activeCollapse ? (
					<i
						className="fas fa-arrow-circle-down"
						onClick={props.handleCollapse}
					></i>
				) : (
					<i
						className="fas fa-arrow-circle-up"
						onClick={props.handleCollapse}
					></i>
				)}
			</h3>
			{props.activeCollapse && (
				<ul className="collapsable-list">
					<li className="">
						{props.folders.map(folder => {
							return (
								<div key={folder._id}>
									<Link to={`/folder/${folder._id}/newslist`}>
										<h4 >{folder.name} </h4>
									</Link>
									<DeleteIcon
										id={folder._id}
										deleteFolder={props.deleteFolder}
										userId={props.currentUser._id}
									/>
								</div>
							);
						})}
					</li>

					<h4>
						<Link to={`/folders/${props.currentUser._id}/createfolder`}>
							<AddBoxRoundedIcon /> Add a folder
						</Link>
					</h4>
				</ul>
			)}
		</li>
	);
};

export default WithAuthConsumer(FolderExpandList);
