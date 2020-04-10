import React from "react";
import Spinner from "../UI/Spinner";

const SourcesFeedItem = ({ sources, handleClick }) => {
	return (
		<div className="col-m-8 d-flex flex-wrap pb-3">
			{sources ? (
				sources.map(function (source) {
          console.log(source)
          return (
					<div className="card card-block m-3">
						<div className="card-body">
							<h3>{source.name}</h3>
							<button
								className="btn btn-primary"
                onClick={e => handleClick(e, source._id)}
                value={source.name}
							>
								Search...
							</button>
						</div>
					</div>
				)})
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default SourcesFeedItem;
