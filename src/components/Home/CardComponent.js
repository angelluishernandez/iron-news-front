import React from "react";
import Spinner from "../UI/Spinner";
import Moment from "react-moment";

const CardComponent = ({
	news,
	loading,
	folders,
	getNewsData,
	handleChangeOnFolderSelect,
	isInFolder,
}) => {
	return loading ? (
		<Spinner />
	) : (
		news.map((newsItem, index) => (
			<div className="row mt-3 pl-2 CardComponent" key={index}>
				<div className="col-md-3 p-3 text-center">
					<img
						src={newsItem.urlToImage}
						alt="images are returning null from the API"
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
					<small className="text-muted">
						<a href={newsItem.url} target="blank" className="break">
							Go to source
						</a>
					</small>
				</div>
				<hr />
				<div className="col-md-12 justify-content-center bg-success">
					{!isInFolder ? (
						<div className="row">
							<div className="col-md-8">
								<select
									name=""
									id=""
									className="w-100"
									onChange={(event) => handleChangeOnFolderSelect(event)}
								>
									<option value="">Select a folder</option>
									{folders.map((folder, index) => {
										return (
											<option value={folder._id} key={index}>
												{folder.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className="col-md-4">
								<button onClick={(event) => getNewsData(event, newsItem.title)}>
									Save to a folder{" "}
								</button>
							</div>
						</div>
					) : null}
				</div>
			</div>
		))
	);
};
export default CardComponent;
