import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { newsActions } from "../../redux/actions/news.actions";
import Spinner from "../UI/Spinner";
import CardComponent from "../Home/CardComponent";

class FolderView extends React.Component {
	state = {
		savedArticles: {},
		loading: true,
		isMounted: true,
	};

	deleteNewsInFolder = (newsId) => {
		console.log(this.props.currentUser._id, newsId, this.props.folderId);
		this.props.deleteNewsInFolder(
			this.props.currentUser._id,
			newsId,
			this.props.folderId
		);
	};

	componentDidMount() {
		console.log("These are the props", this.props);

		this.props.fetchNewsInFolder(this.props.folderId);
		this.setState({
			loading: false,
		});
	}

	componentWillUnmount() {
		this.setState({
			...this.state,
			isMounted: false,
		});
	}
	render() {
		console.log(this.props);
		return (
			<div className="FolderView container">
				<div>
					<h3>These are the news you saved to this folder</h3>
				</div>

				{this.props.news === undefined ? (
					<Spinner />
				) : (
					<div className="row mt-5 mr-3 ml-3">
						{this.props.news.map((savedArticle, index) => {
							console.log(savedArticle);
							return (
								<CardComponent
									news={this.props.news}
									key={index}
									folderId={this.props.folderId}
									isInFolder={true}
									deleteNewsInFolder={this.deleteNewsInFolder}
								/>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	news: state.newsReducer.news,
	currentUser: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
	fetchNewsInFolder: (folderId) =>
		dispatch(newsActions.fetchNewsInFolder(folderId)),
	deleteNewsInFolder: (id, newsId, folderId) =>
		dispatch(newsActions.deleteNewsInFolder(id, newsId, folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FolderView);
