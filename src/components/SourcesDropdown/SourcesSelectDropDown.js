import React from "react";
import OptionsDropDown from "./OptionsDropDown";
import IronNewsService from "../../services/IronNewsService";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

class SourcesSelectDropDown extends React.Component {
	state = {
		queryData: {
			language: "",
			category: "",
		},
		selected: [],
		loading: true,
		sources: [],
	};

	//----------------------component lifecycle----------------------//

	componentDidMount() {
		const { language, category } = this.state.queryData;
		IronNewsService.searchSources({ language, category })
			.then((sources) => {
				console.log(sources);

				this.setState({
					sources,
					loading: false,
				});
			})
			.catch((error) => console.log(error));
	}


	//----------------------methods----------------------//

	handleSelection = (event) => {
		const sourceName = event.target.value;
		const selectedSource = this.state.sources.filter(
			(source) => source.name === sourceName
		);
		const isInArray = this.state.selected.some((el) => {
			return el.name === selectedSource[0].name;
		});
		if (!isInArray) {
			this.setState({
				selected: [...this.state.selected, ...selectedSource],
			});
		} else {
			console.log("No!");
		}
	};

	handleSubmit = (e) => {
		// Send sources to DB
    e.preventDefault()
    console.log(this.props.currentUser._id)
		IronNewsService.addSourcesToUser(
			this.state.selected,
			this.props.currentUser._id
		)
			.then((sources) => console.log("Sources have been saved", sources))
			.catch((error) => console.log(error));
	};

	handleDelete = (event, name) => {
		const itemToDelete = this.state.selected.findIndex(
			(source) => source.name === name
		);
		const newArr = [...this.state.selected];
		if (itemToDelete !== -1) {
			newArr.splice(itemToDelete, 1);
			this.setState({
				selected: newArr,
			});
		}
	};

	render() {
		return (
			<div className="mt-3">
				Select some sources
				<form className="mt-3" onSubmit={e => this.handleSubmit(e)}>
					<OptionsDropDown
						options={this.state.sources}
						handleSelection={this.handleSelection}
					/>
					<div>
						{this.state.selected.map((source, index) => {
							const name = source.name;
							return (
								<Chip
									className="OptionsDropDown__Chip"
									value={name}
									key={index}
									label={name}
									onDelete={(e, name) => this.handleDelete(e, source.name)}
									color="primary"
								/>
							);
						})}
						<button type="submit">Save sources to your profile</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.authentication.user,
});

export default connect(mapStateToProps)(SourcesSelectDropDown);
