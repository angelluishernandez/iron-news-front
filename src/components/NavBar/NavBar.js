import React from "react";
import { Link } from "react-router-dom";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { faHome, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

class NavBar extends React.Component {
	state = {};

	render() {
		return (
			<nav
				className="navbar bg-light navbar-expand-lg navbar-light bg-light"
				role="navigation"
			>
				<Link to="/">
					<FontAwesomeIcon icon={faHome} /> IronNews
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target=".navbar-collapse"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Latest news<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								All news<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Link<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="/">
								Disabled<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li>
							<Link to="/logout">
								{" "}
								<button className="logout-button">
									<FontAwesomeIcon icon={faLongArrowAltUp}/>
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default WithAuthConsumer(NavBar);
