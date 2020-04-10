import React from "react";
import { connect } from "react-redux";
import { sourcesActions } from "../../redux/actions/sources.actions";
import SourcesFeedItem from "./SourcesFeedItem";
import IronNewsService from "../../services/IronNewsService";

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

	handleClick = (event, sourceId) => {
    console.log("entra", event.target.value, sourceId )
    const sourceName = event.target.value
		IronNewsService.getNewsFromSource(
			sourceName, sourceId,
			this.props.currentUser._id
		).then((news) => this.setState({ news }));
	};

	render() {
		console.log(this.props);
		return (
			<div className="ViewSourceComponent container">
				<div className="row">
					<SourcesFeedItem sources={this.props.userSources} handleClick={this.handleClick}/>
				</div>
				<hr />
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
