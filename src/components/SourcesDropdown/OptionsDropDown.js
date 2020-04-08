import React from "react";

const OptionsDropDown = (props) => {
	return (
		<select className="OptionsDropDown" multiple>
			{props.options.map((option, index) => {
				return (
					<option key={index} value={option.name} onClick={props.handleSourceSelection}>
						{option.name}
					</option>
				);
			})}
		</select>
	);
};

export default OptionsDropDown;
