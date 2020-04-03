import React from "react";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { Link } from "react-router-dom";
import DeleteIcon from "../DeleteIcon";

const FolderExpandList = props => {
	return (
		<li className="parent-list-item">
			<h3>
				Folders
				{!props.isFoldersExpanded ? (
					<i
						className="fas fa-arrow-circle-down expand-icon"
						onClick={props.handleExpandCollapseFolders}
					></i>
				) : (
					<i
						className="fas fa-arrow-circle-up expand-icon"
						onClick={props.handleExpandCollapseFolders}
					></i>
				)}
			</h3>
			{props.isFoldersExpanded && (
				<ul className="collapsable-list">
					<li className="">
						{props.folders === undefined
							? null
							: props.folders.map(folder => {
									return (
										<div key={folder._id} className="folder-items">
											<div>
												<Link to={`/folder/${folder._id}/newslist`}>
													<h4>{folder.name} </h4>
												</Link>
											</div>
											<div>
												{" "}
												<DeleteIcon folderId = {folder._id}/>
											</div>
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

export default FolderExpandList;
