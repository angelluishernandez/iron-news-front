import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDownFoldersComponent = ({ folders, currentUserId }) => {
	return (
		<li>
			{folders === undefined ? null : (
				<NavDropdown title="Folders" id="basic-nav-dropdown">
					<NavDropdown.Item href={`/folders/${currentUserId}/createfolder`}>
						Add a new folder
					</NavDropdown.Item>
					{folders.map((folder, index) => (
						<NavDropdown.Item
							href={`/folder/${currentUserId}/newslist`}
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
