import React from "react";
import Moment from "react-moment";

const SourcesNewsItem = ({ title, url, description, date }) => {
	return (
		<div className="p-3 SourcesNewsItem">
			<a href={url} target="blank">
				<h3>{title}</h3>
			</a>
			<p>{description}</p>
			<p className="card-text">
				<small className="text-muted">
					<Moment format="YYYY/MM/DD HH:mm">{date}</Moment>
				</small>
			</p>{" "}
		</div>
	);
};

export default SourcesNewsItem;
