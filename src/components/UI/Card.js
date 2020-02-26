import React from "react";
import Moment from "react-moment";
import "./Card.css";

const Card = props => {
	console.log(props.articles);
	return (
		<div className="Card card-deck">
			{props.articles.map((article, index) => {
				console.log("this is the article =>", typeof article);

				console.log("this is the element=> ", article);
				return (
					<div className="card" key={index}>
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


