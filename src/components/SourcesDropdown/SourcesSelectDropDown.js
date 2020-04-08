import React from "react";
import OptionsDropDown from "./OptionsDropDown";
import IronNewsService from "../../services/IronNewsService";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner";

const SourcesSelectDropDown =(props) =>  {

		return (
			<div>
				{props.sources ? (
					<div className="mt-3">
						Select some sources
						
							<OptionsDropDown
								options={props.sources}
								handleSourceSelection={props.handleSourceSelection}
							/>
							<div>
								{props.selectedSources.map((source, index) => {
									const name = source.name;
									return (
										<Chip
											className="OptionsDropDown__Chip"
											value={name}
											key={index}
											label={name}
											onDelete={(e, name) => props.handleDelete(e, source.name)}
											color="primary"
										/>
									);
								})}
								
							</div>
				
					</div>
				) : (
					<Spinner />
				)}
			</div>
		);
	}


const mapStateToProps = (state) => ({
	currentUser: state.authentication.user,
	sources: state.sourcesReducer.sources,
});

export default connect(mapStateToProps)(SourcesSelectDropDown);
