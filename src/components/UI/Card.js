import React from "react";
import Moment from "react-moment";
import DeleteIcon from "./DeleteIcon";
import ShareIcon from "./ShareIcon";
import IronNewsService from "../../services/IronNewsService";

class Card extends React.Component {
	state = {
		folderId: "",
		isFolderSelected: false,
		articleSelected: "",
	};

	//----------------------handlers----------------------//

	handleChangeOnFolderSelect = (event) => {
		event.preventDefault();
		const folderId = event.target.value;
		console.log(folderId);

		if (folderId !== "") {
			this.setState((prevState) => ({
				...this.state,
				folderId,
				isFolderSelected: true,
			}));
		} else {
			this.setState({
				...this.state,
				folderId: "",
				isFolderSelected: false,
			});
		}
	};

	//----------------------methods----------------------//

	submitSelectedNewsToDB = (event, article, folderId) => {
		event.preventDefault()
		IronNewsService.addNewsToFolder(article, folderId).then(response=> console.log("Success=> ", response))
		
	};

	//----------------------render----------------------//

	render() {
		return (
			<div
				className="Card col-sm-3 d-flex align-items-stretch mb-5 card-container"
				key={this.props.key}
			>
				<div className="card">
					{/* //----------------------If news is not in folder----------------------// */}

					{!this.props.isInFolder ? (
						<form>
							<select
								name="selectedFolder"
								className="custom-select custom-select-mg mt-3 mb-3"
								onChange={(event) => this.handleChangeOnFolderSelect(event)}
							>
								<option value="" selected>
									Choose a folder
								</option>
								{this.props.folders.map((folder, key) => {
									return (
										<option key={key} value={folder._id}>
											{folder.name}
										</option>
									);
								})}
							</select>

							<button
								disabled={!this.state.isFolderSelected}
								className="btn btn-success"
								type="submit"
								onClick={(event) =>
									this.submitSelectedNewsToDB(
										event, 
										this.props.article,
										this.state.folderId
									)
								}
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
									folderId={this.props.folderId}
									deleteNewsInFolder={this.props.deleteNewsInFolder}
								/>
								<ShareIcon />
							</div>
						)
					)}

					<a href={this.props.url} target="blank">
						<img
							className="card-img-top"
							src={this.props.urlToImage}
							alt={this.props.description}
						></img>
					</a>
					<div className="card-body">
						<a href={this.props.url} target="blank">
							<h5 className="card-title">{this.props.title}</h5>
						</a>
						{/* <p className="card-text">{this.props.description}</p> */}
					</div>
					<div>
						<p className="card-text">
							<small className="text-muted">
								<Moment format="YYYY/MM/DD HH:mm">
									{this.props.publishedAt}
								</Moment>
							</small>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
