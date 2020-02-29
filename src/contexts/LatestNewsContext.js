import React, { createContext } from "react";

const LatestNewsContext = createContext();

export class LatestNewsContextProvider extends React.Component {
	state = {
		queryData: {
			query: "", 
			qInTitle: "", 
			source: "", 
			language: "", 
			sortBy: ""
		}, 
		
	};

	setQueryData = (data) => {
		console.log("context is updating => ", this.state.queryData)
		this.setState({ queryData: data })
	}


	render() {
		return (
			<LatestNewsContext.Provider
				value={{ queryData: this.state.queryData, setQueryData: this.setQueryData		}}
			>
				{this.props.children}
			</LatestNewsContext.Provider>
		);
	}
}


export const WithLatestNewsConsumer = WrappedComponent=> props => (
	<LatestNewsContext.Consumer>
		{newsProps => <WrappedComponent {...props}{...newsProps}/>}
	</LatestNewsContext.Consumer>



)


export default LatestNewsContext
