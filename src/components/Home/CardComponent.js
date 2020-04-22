import React from "react";
import Spinner from "../UI/Spinner";
import Moment from "react-moment";

const CardComponent = ({ news, loading }) => {
	return loading ? (
		<Spinner />
	) : (
		news.map((newsItem, index) => (
			<div className="row mt-3 pl-2 CardComponent" key={index}>
				<div className="col-md-3 p-3 text-center">
					<img
						src={newsItem.urlToImage}
						alt={newsItem.title}
						className="card-image"
					></img>
				</div>
				<div className="col-md-7 pt-3">
					<h5>{newsItem.title}</h5>
					<p className="card-component-text">{newsItem.description}</p>
				</div>
				<div className="col-md-2 pt-3">
					<p className="card-text">
						<small className="text-muted">
							<Moment format="YYYY/MM/DD HH:mm">{newsItem.publishedAt}</Moment>
						</small>
					</p>
					<small className="text-muted">
						<p className="break">{newsItem.source.name}</p>
					</small>
				</div>
				<hr />
			</div>
		))
	);
};
export default CardComponent;
