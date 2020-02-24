import React from "react";
import "./SideBar.css"

const SideBar = () => {
	return (
    <div className="wrapper">
		<nav
			className="SideBar col-5 h-100"
			style={{ maxHeight: "90vh", overflow: "scroll" }}
		>
			<ul className="list-unstyled components">
				<p>Home</p>
				<li className="active">
					<a
						href="/"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown"
					>
						Go Home
					</a>
				</li>
				<li className="active">
					<a
						href="/"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown"
					>
						Go to your news
					</a>
					<ul className="list-unstyled collapse">
						<li>
							<a href="/">Check your latest news</a>
						</li>
						<li>
							<a href="/">Check all news</a>
						</li>
					</ul>
				</li>
				<li className="active">
					<a
						href="/"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown"
					>
						Folders
					</a>
					<ul className="list-unstyled collapse">
						<li>
							<a href="/">Folder 1</a>
						</li>
						<li>
							<a href="/">Folder 2</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
    </div>
	);
};

export default SideBar;
