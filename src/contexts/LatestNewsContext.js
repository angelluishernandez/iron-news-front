import React, { createContext } from "react";

const LatestNewsContext = createContext();

export class LatestNewsContextProvider extends React.Component {
	state = {
		queryData: {
			query: "",
			qInTitle: "",
			source: "",
			language: "",
			sortBy: "",
		},
		articles: [], 
		submited: false
	};
	handleChange = query => {
		this.setState({
			data: {
				...this.state.queryData, query
				},
		});
	};

	handleSubmit = ({ queryData }) => {
		this.setState({
			submited: true,
		});
		this.props.setQueryData({queryData});
	};

	setQueryData = data => {
		console.log("context is updating => ", this.state.queryData);
		this.setState({ queryData: data });
	};

	render() {
		return (
			<LatestNewsContext.Provider
				value={{
					queryData: this.state.queryData,
					setQueryData: this.setQueryData,
					handleChangeSearch: this.handleChange,
					handleSubmitSearch: this.handleSubmit,
					articles: this.state.articles
				}}
			>
				{this.props.children}
			</LatestNewsContext.Provider>
		);
	}
}

export const WithLatestNewsConsumer = WrappedComponent => props => (
	<LatestNewsContext.Consumer>
		{newsProps => <WrappedComponent {...props} {...newsProps} />}
	</LatestNewsContext.Consumer>
);

export default LatestNewsContext;
