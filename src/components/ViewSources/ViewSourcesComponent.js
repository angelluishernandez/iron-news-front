import React from "react";
import { connect } from "react-redux";
import { sourcesActions } from "../../redux/actions/sources.actions";
import SourcesFeedItem from "./SourcesFeedItem";
import IronNewsService from "../../services/IronNewsService";
import SourcesNewsItem from "./SourcesNewsItem";

class ViewSourcesComponent extends React.Component {
	state = {
		news: [],
	};
	//----------------------component lifecycle----------------------//

	componentDidMount() {
		const { fetchUserSources, currentUser } = this.props;
		fetchUserSources(currentUser._id);
	}

	//----------------------handlers----------------------//

	handleClick = (sourceName, sourceId) => {
		IronNewsService.getNewsFromSource(
			sourceName,
			sourceId,
			this.props.currentUser._id
		).then((news) => {
			console.log(news);
			this.setState({ news });
		});
	};

	render() {
		console.log(this.state.news);
		return (
			<div className="ViewSourceComponent container">
				<hr />
				<div className="row">
					<div className="col-m-4">
						<SourcesFeedItem
							sources={this.props.userSources}
							handleClick={this.handleClick}
						/>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-m-4">
						{this.state.news.length >= 1
							? this.state.news.map((news) => (
									<SourcesNewsItem
										url={news.url}
										date={news.publishedAt}
										title={news.title}
										description={news.description}
									/>
							  ))
							: null}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.authentication.user,
	userSources: state.sourcesReducer.userSources,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserSources: (userId) =>
		dispatch(sourcesActions.fetchUserSources(userId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewSourcesComponent);
