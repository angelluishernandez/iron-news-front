import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { folderActions } from "../redux/actions/folders.actions";

class MockHome extends React.Component {
	componentDidMount() {
		const { _id } = this.props.currentUser;
		this.props.fetchFolders(_id);
	}

	render() {
		console.log("MOCK", this.props);
		const { _id } = this.props.currentUser;
		return (
			<div>
				<h1 style={{ color: "black" }}>Hola</h1>
				<Link to="/moremock">More Mock</Link>
				<Link to={`/folders/${_id}/createfolder`}>Create a folder</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("this is the state on mapStatetoProps", state);
	return {
		currentUser: { ...state.authentication.user },
		folders: state.folders,
	};
};

const mapDispatchToProps = dispatch => ({
	fetchFolders: id => dispatch(folderActions.fetchFolders(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MockHome);
