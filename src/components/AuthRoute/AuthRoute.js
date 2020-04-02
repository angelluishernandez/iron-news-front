import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = (props) => {

const user = JSON.parse(localStorage.getItem("user"))
console.log("user en auth route=> ", user)
	if(!user){
		return <Redirect to="/login"/>
	} else{
		return <Route {...props} />
	}

}


	// <Route
	// 	{...rest}
	// 	render={props =>
	// 		localStorage.getItem("user") ? (
	// 			<Component {...props} />
	// 		) : (
	// 			<Redirect
	// 				to={{ pathname: "/login", state: { from: props.location } }}
	// 			/>
	// 		)
	// 	}
	// />

	const mapStateToProps = state => {
		const {logginIn} = state.authentication
		return{
			logginIn
		}
	}

export default connect(mapStateToProps)(AuthRoute)