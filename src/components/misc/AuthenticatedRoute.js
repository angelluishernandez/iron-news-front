import React from "react";

import { WithAuthConsumer } from "../../contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = (props) => {
	if (!props.currentUser) {
    console.log("there is a not a currentUse=> ", props.currentUser)
		return <Redirect to="/login" />;
	} else {
    console.log("there is a currentUse=> ", props.currentUser)
		return <Route {...props} />;
	}
};

export default WithAuthConsumer(AuthenticatedRoute)
