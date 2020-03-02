import React from "react";
import "./SideBar.css";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
const FolderExpandList = (props) => {
	
		return (
			<li className="parent-list-item" onClick={props.handleCollapse}>
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
							{props.folders.map((folder, key) => {
								return <h4 key={key}>{folder.name}</h4>;
							})}
						</li>

						<h4>
							<Link to={`/folders/${props.currentUser.id}/createfolder`}>
								<AddBoxRoundedIcon /> Add a folder
							</Link>
						</h4>
					</ul>
				)}
			</li>
		);
	
}

export default WithAuthConsumer(FolderExpandList);
