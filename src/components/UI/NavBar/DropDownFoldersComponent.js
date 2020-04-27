import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDownFoldersComponent = ({ folders, currentUserId }) => {
	return (
		<li>
			{folders === undefined ? null : (
				<NavDropdown title="Folders" id="basic-nav-dropdown" alignCenter>
					<NavDropdown.Item
						alignCenter
						href={`/folders/${currentUserId}/createfolder`}
					>
						Add a new folder
					</NavDropdown.Item>
					{folders.map((folder, index) => (
						<NavDropdown.Item
							href={`/folder/${folder._id}/newslist`}
							key={index}
						>
							{folder.name}
						</NavDropdown.Item>
					))}
				</NavDropdown>
			)}
		</li>
	);
};

export default DropDownFoldersComponent;
