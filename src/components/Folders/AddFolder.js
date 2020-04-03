import React from "react";
import AddFolderForm from "./AddFolderForm";
import IronNewsService from "../../services/IronNewsService";
import { connect } from "react-redux";
import {folderActions} from "../../redux/actions/folders.actions"

class AddFolder extends React.Component {
	state = {
		folder: {
			name: "",
			description: "",
			tags: "",
		},
		submited: false,
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			folder: {
				...this.state.folder,
				[name]: value,
			},
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		const userId = this.props.currentUser._id;
		const folderState = this.state.folder;
		IronNewsService.createFolder({ ...folderState }, userId)
			.then(folder => {
				this.setState({
					...this.state.folder,
					submited: true,
				});
				this.props.fetchFolders(userId)
				this.props.history.push("/")
			})
		

			.catch(error => console.log(error));
	};

	render() {
		return (
			<AddFolderForm
				handleChangeInForm={this.handleChange}
				handleSubmitInForm={this.handleSubmit}
				folder={this.state.folder}
			></AddFolderForm>
		);
	}
}


const mapStateToProps = state=> {
	return{
		currentUser: {...state.authentication.user}
	}
}

const mapDispatchToProps = dispatch => ({
	fetchFolders: id => dispatch(folderActions.fetchFolders(id)),


})
export default connect(mapStateToProps, mapDispatchToProps)(AddFolder);
