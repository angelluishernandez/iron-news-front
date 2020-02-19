import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

class Home extends React.Component {
	state = {
		data: {},
	};
	render() {
		return (
			<div>
				<Link to="/latestnews" className="btn btn-danger">Get the latest headlines</Link>
			</div>
		);
	}
}

export default WithAuthConsumer(Home);
