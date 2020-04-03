import React from "react";
import { Link } from "react-router-dom";
const NewsExpandList = props => {
	return (
		<li className="parent-list-item">
			<h3>
				Latest News{" "}
				{!props.isNewsExpanded ? (
					<i
						className="fas fa-arrow-circle-down expand-icon"
						onClick={props.handleExpandCollapseNews}
					></i>
				) : (
					<i
						className="fas fa-arrow-circle-up expand-icon"
						onClick={props.handleExpandCollapseNews}
					></i>
				)}
			</h3>
			{props.isNewsExpanded && (
				<ul className="collapsable-list">
					<Link to={`/latestnews/${props.currentUserId}`}>
						<li>Check the latest news</li>
					</Link>
					<Link to={`/getallnews/${props.currentUserId}`}>
						<li>Check older news</li>
					</Link>
				</ul>
			)}
		</li>
	);
};

export default NewsExpandList;
