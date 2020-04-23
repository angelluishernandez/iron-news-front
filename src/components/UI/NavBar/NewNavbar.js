import React from "react";
import { Link } from "react-router-dom";
import AvatarComponent from "./AvatarComponent";
import { NavDropdown } from "react-bootstrap";
import DropDownFoldersComponent from "./DropDownFoldersComponent";
import DropDownSourcesComponent from "./DropDownSourcesComponent";

class NewNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
			dropdown: {
				foldersDropdown: false,
			},
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	handleDropdown = (e) => {
		const { id } = e.target;
		this.setState((prevState) => ({
			dropdown: {
				...prevState.dropdown,
				[id]: !prevState.dropdown[id],
			},
		}));
	};

	toggleMenu() {
		this.setState({ menu: !this.state.menu });
	}

	returnClasses = (id) => (id ? "dropdown-menu show" : "dropdown-menu");

	render() {
		console.log(
			"This is the state of the dropdown=> ",
			this.state.dropdown.foldersDropdown
		);
		const show = this.state.menu ? "show mobile-menu" : "";

		const isCollapsed = this.state.menu
			? "justify-content-center"
			: "ml-5 pl-5";

		const isLiCollapsed = this.state.menu ? "" : "ml-5";
		const { dropdown } = this.state;

		return (
			<div className="">
				<nav className="navbar navbar-expand-lg navbar-light NewNavbar pl-5 pr-5 h-100">
					{/* <i
						className="fas fa-bars font-awesome-icon fa-2x"
						onClick={this.props.handleOpen}
					></i> */}

					<AvatarComponent
						currentUserPic={this.props.profilePic}
						currentUserId={this.props.currentUserId}
					/>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#ironnews-navbar"
						aria-controls="ironnews-navbar"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={this.toggleMenu}
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className={`collapse navbar-collapse w-100 ${show}`}
						id="ironnews-navbar"
					>
						<ul className={`navbar-nav  w-100 ${isCollapsed}`}>
							<li className={`nav-item ${isLiCollapsed}`}>
								<Link className="nav-link " to={`/${this.props.currentUserId}`}>
									Home <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className={`nav-item ${isLiCollapsed}`}>
								<Link className="nav-link" to={`/${this.props.currentUserId}`}>
									Latest News
								</Link>
							</li>
							<li className={`nav-item ${isLiCollapsed}`}>
								<a className="nav-link" href="#">
									All news
								</a>
							</li>
							<DropDownSourcesComponent />
							<DropDownFoldersComponent
								folders={this.props.folders}
								currentUserId={this.props.currentUserId}
								className={`nav-item ${isLiCollapsed}`}
							/>

							<li
								className={`nav-item ${isLiCollapsed} active`}
								onClick={this.props.handleLogout}
							>
								<a className="nav-link" href="#">
									Logout{" "}
								</a>
							</li>
							{this.state.menu ? (
								<li className={`nav-item ${isLiCollapsed} active`}>
									<Link className={``} href={`/${this.props.currentUserId}`}>
										<img
											src={require("/home/angel/Ironhack/final-project-front/src/images/IronnewsLogo.png")}
											alt=""
											style={{ maxHeight: "30px" }}
										/>
									</Link>
								</li>
							) : null}
						</ul>
					</div>
					{!this.state.menu ? (
						<Link
							className={`navbar-brand ${isCollapsed}`}
							href={`/${this.props.currentUserId}`}
						>
							<img
								src={require("/home/angel/Ironhack/final-project-front/src/images/IronnewsLogo.png")}
								alt=""
								style={{ maxHeight: "30px" }}
							/>
						</Link>
					) : null}
				</nav>
			</div>
		);
	}
}

export default NewNavbar;
