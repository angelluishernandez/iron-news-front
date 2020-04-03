import React from "react";
import SideBar from "../UI/SideBar/SideBar"
import NavBar from "../UI/NavBar/NavBar"
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { connect } from "react-redux";
import {userActions} from "../../redux/actions/user.actions"


class Layout extends React.Component {
	openNav() {
		document.getElementById("sidebar").style.width = "400px";
		document.getElementById("navbar").style.marginLeft = "400px";
	}

	closeNav() {
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("navbar").style.marginLeft = "0";
	}


	handleLogout = () => {
		this.props.logout()
		this.props.history.push("/login")
	}
	render() {
		console.log(this.props)
		return (
			<div className="Layout">
				<NavBar handleOpen={this.openNav} currentUserId={this.props.currentUser._id} handleLogout={this.handleLogout}></NavBar>
				{/* <SideBar handleClose={this.closeNav}></SideBar> */}
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
	logout: () => dispatch(userActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
