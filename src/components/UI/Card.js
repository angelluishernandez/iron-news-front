import React from "react";
import Moment from "react-moment";
import "./Card.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const Card = props => {
	// const currentArticle = {
	// 	title: props.title,
	// 	urlToImage: props.urlToImage,
	// 	description: props.description,
	// 	url: props.url,
	// 	publishedAt: props.publishedAt,
	// };
	return (
		<div className="Card card-container container-fluid" key={props.key}>
			<div className="card col-3">
				{!props.isInFolder ? (
					<form>
						<select
							name="selectedFolder"
							onChange={event => props.handleChangeOnFolderSelect(event)}
						>
							{props.folders.map((folder, key) => {
								return (
									<option key={key} value={folder._id}>
										{folder.name}
									</option>
								);
							})}
						</select>

						<button
							className="btn btn-success"
							type="submit"
							onClick={event => props.getNewsData(event, props.title)}
						>
							Add to this folder
						</button>
					</form>
				) : null}

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
							<Moment format="YYYY/MM/DD HH:mm">{props.publishedAt}</Moment>
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default WithAuthConsumer(Card);
