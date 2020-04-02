import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { folderActions } from "../redux/actions/folders.actions";
import { userActions } from "../redux/actions/user.actions";

class MockHome extends React.Component {
	componentDidMount() {
		const { _id } = this.props.currentUser;
		this.props.fetchFolders(_id);
		console.log(this.props);
	}

	handleClick = event => {
		this.props.logout();
		this.props.history.push("/login")
	};
	render() {
		console.log("MOCK", this.props);
		const { _id } = this.props.currentUser;
		return (
			<div>
				<h1 style={{ color: "black" }}>Hola</h1>
				<div>
					<Link to="/moremock">More Mock</Link>
				</div>
				<div>
					<Link to={`/folders/${_id}/createfolder`}>Create a folder</Link>
				</div>
				<button onClick={this.handleClick}>LogOut</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("this is the state on mapStatetoProps", state);
	return {
		currentUser: state.authentication.user,
		folders: state.folders,
	};
};

const mapDispatchToProps = dispatch => ({
	fetchFolders: id => dispatch(folderActions.fetchFolders(id)),
	logout: () => dispatch(userActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MockHome);
