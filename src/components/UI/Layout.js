import React from "react";
import SideBar from "../UI/SideBar/SideBar"
import NavBar from "../UI/NavBar/NavBar"
import { WithAuthConsumer } from "../../contexts/AuthContext";


class Layout extends React.Component {
	openNav() {
		document.getElementById("sidebar").style.width = "400px";
		document.getElementById("navbar").style.marginLeft = "400px";
	}

	closeNav() {
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("navbar").style.marginLeft = "0";
	}

	render() {
		return (
			<div className="Layout">
				<NavBar handleOpen={this.openNav}></NavBar>
				{/* <SideBar handleClose={this.closeNav}></SideBar> */}
			</div>
		);
	}
}

export default WithAuthConsumer(Layout);
