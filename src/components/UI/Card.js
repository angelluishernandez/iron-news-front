import React from "react";
import Moment from "react-moment";
import DeleteIcon from "./DeleteIcon";
import ShareIcon from "./ShareIcon";

const Card = (props) => {
	return (
		<div
			className="Card col-sm-3 d-flex align-items-stretch mb-5 card-container"
			key={props.key}
		>
			<div className="card">
				{/* //----------------------If news is not in folder----------------------// */}

				{!props.isInFolder ? (
					<form>
						<select
							name="selectedFolder"
							className="custom-select custom-select-mg mt-3 mb-3"
							onChange={(event) => props.handleChangeOnFolderSelect(event)}
						>
							<option value="" selected disabled hidden>
								Choose a folder
							</option>
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
							onClick={(event) => props.getNewsData(event, props.title)}
						>
							Add to this folder
						</button>
					</form>
				) : (
					{
						/* //----------------------If news is in folder----------------------// */
					}(
						<div className="icons-div">
							<DeleteIcon
								folderId={props.folderId}
								deleteNewsInFolder={props.deleteNewsInFolder}
							/>
							<ShareIcon />
						</div>
					)
				)}

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
					{/* <p className="card-text">{props.description}</p> */}
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

export default Card;
