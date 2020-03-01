import React from "react";
import AddFolderForm from "./AddFolderForm";
import IronNewsService from "../../services/IronNewsService";
import { WithAuthConsumer } from "../../contexts/AuthContext";

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
    console.log("folder on change=> ", this.state)
    console.log("this is the event", event.target.value)

		const { name, value } = event.target;
		this.setState({
			folder: { 
        ...this.state.folder, 
        [name]: value },
		});
	};
	handleSubmit = event => {
  console.log("entra en submit")
    event.preventDefault();
    const userId = this.props.currentUser._id
    const folderState = this.state.folder
		IronNewsService.createFolder({...folderState}, userId)
			.then(folder => {
				this.setState({
					...this.state.folder,
					submited: true,
        });
        console.log("this is the folder => ", folder)
			})
			.catch(error => console.log(error));
      console.log("folder on submit=> ", this.state.folder)

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

export default WithAuthConsumer(AddFolder) ;
