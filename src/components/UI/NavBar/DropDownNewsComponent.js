import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDownNews = ({ currentUserId }) => {
	return (
		<li>
			<NavDropdown title="News" id="basic-nav-dropdown">
				<NavDropdown.Item href={`/latestnews/${currentUserId}`}>
					Latest News
				</NavDropdown.Item>
				<NavDropdown.Item href={`/getallnews/${currentUserId}`}>
					All news
				</NavDropdown.Item>
			</NavDropdown>
		</li>
	);
};

export default DropDownNews;
