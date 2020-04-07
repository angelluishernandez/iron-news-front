import React from "react";
import customCategories from "../../constants/customCategories";
import languages from "../../constants/languages";

const SourcesCategory = props => (
	<select
		onChange={e => props.handleSelectChange(e)}
		className="custom-select custom-select-mg mt-3"
		name={props.name}
	>
		<option selected hidden>
			Choose a {props.name}
		</option>
		{props.name === "category"
			? customCategories.map((category, index) => (
					<option key={index} value={category}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</option>
			  ))
			: languages.map((language, index) => {
					return (
						<option key={index} value={language.code}>
							{language.flag}
							{language.name}
						</option>
					);
			  })}
	</select>
);

export default SourcesCategory;
