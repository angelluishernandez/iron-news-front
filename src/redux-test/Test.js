import React from "react";
import { connect } from "react-redux";
import { getUserFolders } from "../redux/actions/folders.actions";
import { bindActionCreators } from "redux";

class Test extends React.Component {
	componentDidMount = () => {
		
		const { getUserFolders } = this.props;
		getUserFolders();

		
	};

	render() {
		
		return this.props.folders.map((folder, index) => (
			<h1 key={index}>{folder.name}</h1>
		));
	}
}

const mapStateToProps = state => {
	return {
		folders: state,
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getUserFolders,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
