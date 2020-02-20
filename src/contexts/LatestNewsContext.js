import React, { createContext } from "react";

const LatestNewsContext = createContext();

class LatestNewsContextProvider extends React.Component {
	state = {};

	render() {
		return (
			<LatestNewsContext.Provider>
				{this.props.children}
			</LatestNewsContext.Provider>
		);
	}
}
