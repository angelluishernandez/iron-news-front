import React from "react";
import "./SideBar.css"
class NewsExpandList extends React.Component {
	state = {
		collapse: true,
	};

	handleExpandCollapse = () => {
		this.state.activeCollapse
			? this.setState({ activeCollapse: false })
			: this.setState({ activeCollapse: true });
	};
	render() {
		return (
			<li className="parent-list-item">
				<h3>
					Latest News{" "}
					{!this.state.activeCollapse ? (
						<i
							className="fas fa-arrow-circle-down"
							onClick={this.handleExpandCollapse}
						></i>
					) : <i
					className="fas fa-arrow-circle-up"
					onClick={this.handleExpandCollapse}
				></i>}
				</h3>
				{this.state.activeCollapse && (
					<ul className="collapsable-list">
						<li>Check the latest news</li>
						<li>Check older news</li>
					</ul>
				)}
			</li>
		);
	}
}

export default NewsExpandList;
