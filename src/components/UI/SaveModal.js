import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

const SaveModal = () => {
	return (
		<Modal contentLabel="Select a folder" className="modal">
			<p>Hello</p>
		</Modal>
	);
};

const mapStateToProps = (state) => ({
	folders: state.folderReducer.folders,
});

export default connect(mapStateToProps)(SaveModal);
