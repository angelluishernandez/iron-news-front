import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
import "./UserViewSideBar.css"

class UserViewSideBar extends React.Component {
	state = {
		user: this.props.currentUser,
	};

	render() {
		return (
			<div className="UserViewSideBar card">
				<img src={this.state.user.profilePic} alt={this.state.user.name} className="avatar"/>
				<h3>{`Welcome ${this.state.user.name}`}</h3>
        <h1>Añadir link a perfil/editar</h1>
				<div className="card-body"></div>
			</div>
		);
	}
}

export default WithAuthConsumer(UserViewSideBar);
