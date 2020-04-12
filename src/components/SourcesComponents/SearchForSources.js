import React from "react";
import SearchSourcesForm from "./SearchSourcesForm";
import Spinner from "../UI/Spinner";
import SourcesList from "./SourcesList";
import IronNewsService from "../../services/IronNewsService";
import { connect } from "react-redux";
import { sourcesActions } from "../../redux/actions/sources.actions";

class SearchForSources extends React.Component {
	state = {
		data: {
			language: "",
			category: "",
		},
		selected: [],
		sources: [],
		submited: false,
		loading: true,
	};

	//----------------------component lifecycle----------------------//

	// Call redux action to fetch sources

	componentDidMount() {
		const { language, category } = this.state.data;
		this.props.fetchSources(language, category);
	}

	// Call redux action to fetch sources

	componentDidUpdate(prevProps, prevState) {
		if (prevState.data !== this.state.data) {
			this.props.fetchSources(this.state.data);
		}
	}

	//----------------------methods----------------------//

	handleSelectChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			submited: false,
			data: {
				...this.state.data,
				[name]: value,
			},
		});
	};

	
	handleSourceSelection = (event) => {
		const sourceName = event.target.value;
		const selectedSource = this.props.sources.filter(
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
		e.preventDefault();
		console.log(this.props.currentUser._id);
		IronNewsService.addSourcesToUser(
			this.state.selected,
			this.props.currentUser._id
		)
			.then((sources) => {
				console.log("Sources have been saved", sources);
			})
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
console.log(this.state.selected)
		return (
			<div className="SearchForSources container">
				<SearchSourcesForm
					handleSelectChange={this.handleSelectChange}
					handleSubmit={this.handleSubmit}
					handleSourceSelection={this.handleSourceSelection}
					selectedSources={this.state.selected}
					handleDelete={this.handleDelete}
					className="SearchSourcesForm pt-2 d-flex align-content-center"
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	sources: state.sourcesReducer.sources,
	currentUser: state.authentication.user
});

const mapDispatchToProps = (dispatch) => ({
	fetchSources: (language, category) =>
		dispatch(sourcesActions.fetchSources(language, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForSources);
