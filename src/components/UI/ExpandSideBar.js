import React from "react";
import "./SideBar.css";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
const ExpandSideBar = props => {
	return (
		<div className="sidebar-main ExpandSideBar" id="sidebar-main">
			<MenuOutlinedIcon className="openbtn" onClick={props.handleOpen} aria-hidden="false">
				{" "}
			</MenuOutlinedIcon>
		</div>
	);
};

export default ExpandSideBar;
