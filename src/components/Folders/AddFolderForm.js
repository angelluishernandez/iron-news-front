import React from "react";

const AddFolderForm = props => {
	return (
		<div className="Login pt-3 pb-1">
			<form
				className="mb-4"
				onSubmit={(event) => props.handleSubmitInForm(event)}
			>
				<div className="mb-4">
					<label htmlFor="name">Name your folder</label>
					<input
						type="text"
						className={`form-control`}
						autoComplete="off"
						value={props.folder.name}
						// onBlur={handleBlur}
						onChange={(event) => props.handleChangeInForm(event)}
						placeholder="Folder's name"
						name="name"
					/>
				</div>
        <div className="mb-4">
					<label htmlFor="description">Describe it</label>
					<input
						type="text"
						className={`form-control`}
						autoComplete="off"
						value={props.folder.description}
						// onBlur={handleBlur}
						onChange={(event) => props.handleChangeInForm(event)}
						placeholder="Description"
						name="description"
					/>
				</div>
      
        <div className="mb-4">
					<label htmlFor="tags">Add some tags</label>
					<input
						type="text"
						className={`form-control`}
						autoComplete="off"
						value={props.folder.tags}
						// onBlur={handleBlur}
						onChange={(event) => props.handleChangeInForm(event)}
						placeholder="Add some tags"
						name="tags"
					/>
				</div>
        <button type="submit" className="btn btn-success" >Add the folder</button>
			</form>
		</div>
	);
};

export default AddFolderForm;
