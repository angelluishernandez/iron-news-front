import React from "react";
import "./SideBar.css";

const SideBar =(props) => {
	
		return (
			<div className="SideBar" id="sidebar">
				<div className="container-fluid h-100">
					
					<ul>
						<li><button className="closebtn" onClick={props.handleOpen}>Close</button></li>
						<li>
							<h3>Home</h3>
						</li>
						<li>
							<h3>Latest News</h3>
						</li>
						<li>
							<h3>Home</h3>
						</li>
					</ul>
				</div>
			
			</div>
		);
	}

export default SideBar;
