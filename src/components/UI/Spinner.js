import React from "react";

import "./Spinner.css";

const Spinner = () => {
	return (
		<div className="d-flex justify-content-center spinner-container align-items-center" >
			<div className="spinner-grow" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
