import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../../contexts/AuthContext";
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
		console.log(this.props)
		return (
			<li className="parent-list-item" onClick={this.handleExpandCollapse}>
				<h3>
					Latest News{" "}
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
						<Link to={`/latestnews/${this.props.currentUser._id}`}>
							<li>Check the latest news</li>
						</Link>
						<li>Check older news</li>
					</ul>
				)}
			</li>
		);
	}
}

export default WithAuthConsumer(NewsExpandList) 
