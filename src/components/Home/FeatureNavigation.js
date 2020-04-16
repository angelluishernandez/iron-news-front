import React from "react";
import NavigationCard from "./NavigationCard";
const features = [
	"search",
	"add sources",
	"edit your profile",
	"customized searches",
];

const FeatureNavigation = () => {
	return (
		<div className="container">
			<div className="row">
				{features.map((feature, index) => {
					return <NavigationCard></NavigationCard>;
				})}
			</div>
		</div>
	);
};

export default FeatureNavigation;
