import React from "react";
import Spinner from "../UI/Spinner";

const CardComponent = ({ news, loading }) => {
	console.log(news);
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
				<div className="col-md-7">
					<h5>{newsItem.title}</h5>
					<p className="card-component-text">{newsItem.description}</p>
				</div>
				<div className="col-md-2">
					<p className="">{newsItem.publishedAt}</p>
					<p>{newsItem.source.name}</p>
				</div>
				<hr />
			</div>
		))
	);
};
export default CardComponent;
