import React from "react";
import SideBar from "../UI/SideBar";
import ExpandSideBar from "../UI/ExpandSideBar";

class SideBarLogic extends React.Component {
	openNav() {
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("sidebar-main").style.marginLeft = "250px";
	}

	closeNav() {
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("sidebar-main").style.marginLeft = "0";
	}

	render() {
		return (
			<div>
				<SideBar handleOpen={this.openNav}></SideBar>
				<ExpandSideBar handleClose={this.closeNav}></ExpandSideBar>
			</div>
		);
	}
}

export default SideBarLogic;
