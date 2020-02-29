import React from "react";
import Moment from "react-moment";
import "./Card.css";

const Card = props => {
	return (
		<div className="Card card-container container-fluid">
			{props.articles.map((article, key) => {
				console.log("entra en card");
				return (
					<div className="card col-3" key={key}>
						<img
							className="card-img-top"
							src={article.urlToImage}
							alt={article.description}
						></img>
						<div className="card-body">
							<h5 className="card-title">{article.title}</h5>
							<p className="card-text">{article.description}</p>
						</div>
						<div>
							<p className="card-text">
								<small className="text-muted">
									<Moment format="YYYY/MM/DD HH:mm">
										{article.publishedAt}
									</Moment>
								</small>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
