import React from "react";
import AddFolderForm from "./AddFolderForm";
import IronNewsService from "../../services/IronNewsService";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
export default connect(mapStateToProps) (AddFolder);
