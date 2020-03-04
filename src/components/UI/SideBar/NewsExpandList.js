import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
const NewsExpandList = props => {
	return (
		<li className="parent-list-item">
			<h3>
				Latest News{" "}
				{!props.activeCollapse ? (
					<i
						className="fas fa-arrow-circle-down expand-icon"
						onClick={props.handleCollapse}
					></i>
				) : (
					<i
						className="fas fa-arrow-circle-up expand-icon"
						onClick={props.handleCollapse}
					></i>
				)}
			</h3>
			{props.activeCollapse && (
				<ul className="collapsable-list">
					<Link to={`/latestnews/${props.currentUser._id}`}>
						<li>Check the latest news</li>
					</Link>
					<Link to={`/getallnews/${props.currentUser._id}`}>
						<li>Check older news</li>
					</Link>
				</ul>
			)}
		</li>
	);
};

export default WithAuthConsumer(NewsExpandList);
