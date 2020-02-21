import React from "react";

const LatestNewsCard = ( props ) => {
	
	return (
		<div className="LatestNewsCard">
			<div className="card">
				<img className="card-img-top" src="..."  />
				<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in to
						additional content.
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">Last updated 3 mins ago</small>
				</div>
			</div>
		</div>
	);
};

export default LatestNewsCard;
