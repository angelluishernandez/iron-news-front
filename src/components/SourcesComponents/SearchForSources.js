import React from "react";
import SearchSourcesForm from "./SearchSourcesForm";
import IronNewsService from "../../services/IronNewsService";

class SearchForSources extends React.Component {
	state = {
		data: {
			language: "",
			category: "",
		},
		submited: false,
		sources: [],
		loading: true
	};

	handleChangeSearch = e => {
		const { name, value } = e.target;
		this.setState({
			submited: false,
			data: {
				...this.state.data,
				[name]: value,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			submited: true,
			loading: true
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { language, category } = this.state.data;
		if (prevState.submited !== this.state.submited && this.state.submited) {
			IronNewsService.searchSources({ language, category })
				.then(sources =>
					this.setState({
						sources: [sources],
						loading: false
					})
				)
				.catch(error => console.log(error));
		}
	}

	render() {
		return (
			<div className="SearchForSources">
				<SearchSourcesForm
					handleChangeSearch={this.handleChangeSearch}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default SearchForSources;
