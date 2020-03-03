import React from "react";
import Moment from "react-moment";
import "./Card.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const Card = props => {
	return (
		<div className="Card card-container container-fluid" key={props.key}>
			{/* {props.articles.map((article, cardkey) => {
				return (
					 */}
					<div className="card col-3" >
						<select>
							{props.folders.map((folder, key) => {
								return <option key={key}>{folder.name}</option>;
							})}
						</select>
						<button
							className="btn btn-success"
							onClick={(event) => props.getNewsData(event, props.title)}
						>
							Add to this folder
						</button>
						<a href={props.url} target="blank">
							<img
								className="card-img-top"
								src={props.urlToImage}
								alt={props.description}
							></img>
						</a>
						<div className="card-body">
							<a href={props.url} target="blank">
								<h5 className="card-title">{props.title}</h5>
							</a>
							<p className="card-text">{props.description}</p>
						</div>
						<div>
							<p className="card-text">
								<small className="text-muted">
									<Moment format="YYYY/MM/DD HH:mm">
										{props.publishedAt}
									</Moment>
								</small>
							</p>
						</div>
					</div>
				{/* );
			})} */}
		</div>
	);
};

export default WithAuthConsumer(Card);
