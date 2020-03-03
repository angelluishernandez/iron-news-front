import React from "react";
import Moment from "react-moment";
import "./Card.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const Card = props => {
	return (
		<div className="Card card-container container-fluid">
			{props.articles.map((article, key) => {
				console.log("entra en card");
				return (
					<form key={key}>
						<div className="card col-3" >
							<select>
								{props.folders.map((folder, key) => {
									return <option key={key}>{folder.name}</option>;
								})}
							</select>
							<a href={article.url} target="blank">
								<img
									className="card-img-top"
									src={article.urlToImage}
									alt={article.description}
								></img>
							</a>
							<div className="card-body">
								<a href={article.url} target="blank">
									<h5 className="card-title">{article.title}</h5>
								</a>
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
					</form>
				);
			})}
		</div>
	);
};

export default WithAuthConsumer(Card);
