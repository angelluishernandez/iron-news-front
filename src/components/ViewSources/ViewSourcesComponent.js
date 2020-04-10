import React from "react";
import { connect } from "react-redux";
import { sourcesActions } from "../../redux/actions/sources.actions";
import SourcesFeedItem from "./SourcesFeedItem"

class ViewSourcesComponent extends React.Component {
	componentDidMount() {
		const { fetchUserSources, currentUser } = this.props;
		fetchUserSources(currentUser._id);
	}

	render() {
		console.log(this.props);
		return (
			<div className="ViewSourceComponent container">
				<div className="row">
					<div className="col-m-4">
						<SourcesFeedItem sources={this.props.userSources}/>
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
	fetchUserSources: (userId) => dispatch(sourcesActions.fetchUserSources(userId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewSourcesComponent);
