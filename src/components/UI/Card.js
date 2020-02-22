import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = props => {
	console.log(props.articles);
	return (
		<ul className="Card">
			{props.articles.map(article =>
				article.map((element, index) => {
					return (
						<li key={index}>
							<div className="Card">
								<div className="card">
									<img
										className="card-img-top"
										src={element.urlToImage}
										alt={element.title}
									/>
									<a href={element.url} target="blank">
										<div className="card-body">
											<h5 className="card-title">{element.title}</h5>
											<p className="card-text">{element.description}</p>
										</div>
									</a>
									<div className="card-footer">
										<Moment format="YYYY/MM/DD HH:mm">
											{element.publishedAt}
										</Moment>
									</div>
								</div>
							</div>
						</li>
					);
				})
			)}
		</ul>
	);
};

export default Card;
