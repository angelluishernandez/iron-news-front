import React from "react";
import "./SideBar.css"
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
class FolderExpandList extends React.Component {
	state = {
		activeCollapse: false,
	};
	handleExpandCollapse = () => {
		this.state.activeCollapse
			? this.setState({ activeCollapse: false })
			: this.setState({ activeCollapse: true });
	};
	render() {
		return (
			<li className="parent-list-item" onClick={this.handleExpandCollapse}>
				<h3>
					Folders
					{!this.state.activeCollapse ? (
						<i
							className="fas fa-arrow-circle-down"
							onClick={this.handleExpandCollapse}
						></i>
					) : (
						<i
							className="fas fa-arrow-circle-up"
							onClick={this.handleExpandCollapse}
						></i>
					)}
				</h3>
				{this.state.activeCollapse && (
					<ul className="collapsable-list">
						<li className="">
							<h4>Añadir las carpetas en el estado y mapearlas
								
							</h4>
						</li>
					
						<h4>
							<AddBoxRoundedIcon /> Add a folder
						</h4>
					</ul>
				)}
			</li>
		);
	}
}

export default FolderExpandList;
