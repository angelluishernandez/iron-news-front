import React from "react";
import { connect } from "react-redux";

const Moremock = props => {
	console.log(props);
	return (
		<div>
			<h1>{props.userState.name}</h1>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentUser: state.userState,
	};
};

export default connect(mapStateToProps)(Moremock);
