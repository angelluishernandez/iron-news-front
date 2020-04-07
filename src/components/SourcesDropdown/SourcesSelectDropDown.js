import React from "react";
import OptionsDropDown from "./OptionsDropDown";
import IronNewsService from "../../services/IronNewsService";

class SourcesSelectDropDown extends React.Component {
	state = {
		selected: [],
		loading: true,
		sources: [],
	};

	//----------------------component lifecycle----------------------//

	componentDidMount() {
		IronNewsService.searchSources()
			.then((sources) =>
				this.setState({
					sources,
					loading: false,
				})
			)
			.catch((error) => console.log(error));
	}

	//----------------------methods----------------------//

	handleSelection = (event) => {
		console.log(event.target.value);
	};

	render() {
		return (
			<OptionsDropDown
				options={this.state.sources}
				handleSelection={this.handleSelection}
			/>
		);
	}
}

export default SourcesSelectDropDown;
