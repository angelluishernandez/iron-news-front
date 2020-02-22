import React from "react";
import { Link } from "react-router-dom";
import "./UI.css"

const SideBarItems = () => {
	return (
			<nav className="SideBarItems">
				<div className="sidebar-header">
					<h3>IronNews</h3>
				</div>
				<ul className="list-unstyled components">
					<p>Latest News</p>
					<li className="active">
						<Link
							to="/latestnews"
							data-toggle="collapse"
							aria-expanded="false"
							className="dropdown-toggle"
						>
							Latest News
						</Link>
					</li>
					<li className="active">
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
	);
};

export default SideBarItems;
