import React from "react";
import { connect } from "react-redux";
import { folderActions } from "../../redux/actions/folders.actions";

const DeleteIcon = props => {
	return (
		<i
			onClick={event =>
				props.deleteFolder(props.currentUser._id, props.folderId)
			}
			className="fas fa-share-alt"
		></i>
	);
};

const mapStateToProps = state => {
	return {
		currentUser: state.authentication.user,
	};
};

const mapDispatchToProps = dispatch => ({
	deleteFolder: (currentUserId, folderId) =>
		dispatch(folderActions.deleteFolder(currentUserId, folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteIcon);
