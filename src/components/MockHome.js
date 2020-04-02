import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MockHome = (props) => {
console.log("MOCK", props)
	return (
		<div>
      <h1 style={{color: "black"}}>HOla</h1>
			<Link to ="/moremock">More Mock</Link>
		</div>
	);
};

const mapStateToProps = (state) => {
  console.log("this is the state on mapStatetoProps", state)
  return {
    currentUser: {...state.authentication.user}
  }
}



export default connect(mapStateToProps)(MockHome)