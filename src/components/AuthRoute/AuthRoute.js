import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = props => {

	if(!localStorage.getItem("user")){
		return <Redirect to={"/login"} />
	} else {
		return <Route {...props} />
	}
}

const mapStateToProps = state =>( {
	currentUser: state.authentication
})

export default connect(mapStateToProps)(AuthRoute)