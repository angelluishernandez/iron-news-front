import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDownSourcesComponent = () => {
	return (
		<li>
			<NavDropdown title="Sources" id="basic-nav-dropdown">
				<NavDropdown.Item href={`/sources`}>Add a new source</NavDropdown.Item>
				<NavDropdown.Item href={"/sources/feed"}>
					View your sources feed
				</NavDropdown.Item>
			</NavDropdown>
		</li>
	);
};

export default DropDownSourcesComponent;
