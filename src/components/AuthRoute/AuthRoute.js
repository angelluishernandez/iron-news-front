import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = (props) => {
	if (!props.currentUser) {
		console.log("this is the current user =>", props.currentUser)
    
		return <Redirect to={"/login"} />;
	} else {
		return <Route {...props} />;
	}
};

const mapStateToProps = state => ({
	currentUser: state.authentication.user
})

export default connect(mapStateToProps)(AuthenticatedRoute)

