import React from "react";
import customCategories from "../../constants/customCategories";

const CategoryFilterComponent = ({ category, handleChange, handleSubmit }) => {
	return (
		<div className="CategoryFilterComponent">
			<form value="..." onSubmit={handleSubmit}>
				<select
					name="category"
					value={category}
					onChange={handleChange}
					className="custom-select custom-select-mg mt-3"
				>
					<option selected hidden>
						Choose a category
					</option>
					{customCategories.map((category, index) => {
						return (
							<option value={category} key={index}>
								{category.charAt(0).toUpperCase() + category.slice(1)}
								{}
							</option>
						);
					})}
				</select>
			</form>
		</div>
	);
};

export default CategoryFilterComponent;
