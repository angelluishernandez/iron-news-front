import React from "react";
import OptionsDropDown from "./OptionsDropDown";
import IronNewsService from "../../services/IronNewsService";

class SourcesSelectDropDown extends React.Component {
	state = {
		selected: [],
    loading: true,
    sources: []
  };
  
  componentDidMount(){
    IronNewsService.searchSources().then(sources => this.setState({
      sources, loading: false
    }))
    .catch(error=> console.log(error))
  }

	render() {
		return <OptionsDropDown options={this.state.selected} />;
	}
}

export default SourcesSelectDropDown;
