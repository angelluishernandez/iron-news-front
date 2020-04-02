import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...rest }) => {

// const user = JSON.parse(localStorage.getItem("user"))
// console.log("props en auth route=>", props)
// console.log("user en auth route=> ", user)
// 	if(!user){
// 		return <Redirect to="/login"/>
// 	} else{
// 		return <Route {...props} />
// 	}




	return (<Route
		{...rest}
		render={props =>
			localStorage.getItem("user") ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{ pathname: "/login", state: { from: props.location } }}
				/>
			)
		}
	/>)
}
