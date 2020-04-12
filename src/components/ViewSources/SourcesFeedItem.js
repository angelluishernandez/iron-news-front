import React from "react";
import Spinner from "../UI/Spinner";
import { Chip } from "@material-ui/core";

const SourcesFeedItem = ({ sources, handleClick }) => {
	return (
		<div className="col-md-12 d-flex flex-wrap pb-3">
			{sources ? (
				sources.map(function (source, index) {
					return (
						<div>
							<Chip
								className="OptionsDropDown__Chip"
								value={source.name}
								key={index}
								label={source.name}
								// onSelect={(e, name) => props.handleDelete(e, source.name)}
								onClick={(event) => handleClick(source.name, source.idFromAPI)}
								// color="primary"	
								variant="outlined"
								color="primary"
							/>
						</div>
						
					);
				})
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default SourcesFeedItem;
