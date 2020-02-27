import React from "react";
import customCategoriesArray from "../../constants/customCategories";
import "./SigIn.css";
import IronNewsService from "../../services/IronNewsService";


class SignIn extends React.Component {
	state = {
		data: {
			name: "",
			email: "",
			password: "",
			profilePic: null,
			organization: "",
			collaborators: "",
			customCategories: [],
		},
		error: false,
		loading: true,
		success: false,
	};

	handleChange = event => {
		const { name, value, files } = event.target;
		console.log(event.target.files);
		this.setState({
			data: {
				...this.state.data,
				[name]: files ? files[0] : value,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { data } = this.state;
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("password", data.password);
		formData.append("profilePic", data.profilePic);
		formData.append("organization", data.organization);
		formData.append("collaborators", data.collaborators);
		formData.append("customCategories", data.customCategories);

		this.setState({ loading: true, error: false }, () => {
			IronNewsService.register(formData)
				.then(() => {
					console.log("entra");
					this.setState({
						success: true,
					});
				})
				.catch(() => {
					this.setState({
						error: true,
						loading: false,
					});
				});
		});
	};
	render() {
		const { data, error, loading } = this.state;
		const errorClassName = error ? "is-invalid" : "";
		return (
			<div className="Login pt-3 pb-1">
				<form className="mb-4" onSubmit={this.handleSubmit}>
					<div className="mb-4">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.name}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your name"
							name="name"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password">Email</label>
						<input
							type="text"
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.email}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your email"
							name="email"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.password}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your password"
							name="password"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="profilePic">Profile pic</label>
						<input
							type="file"
							className={`form-control-file ${errorClassName}`}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							name="profilePic"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="organization">Organization</label>
						<input
							type="text"
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.organization}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your Organization"
							name="organization"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="collaborators">Collaborators</label>
						<input
							type="option"
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.collaborators}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your collaborators"
							name="collaborators"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="customCategories">
							What topics are you interested in?
							<select
								onChange={this.handleChange}
								value={data.customCategories}
								className="custom-select custom-select-mg mt-3"
								name="customCategories"
							>
								{customCategoriesArray.map((category, key) => {
									return (
										<option key={key} value={category}>
											{category.charAt(0).toUpperCase() + category.slice(1)}
											{}
										</option>
									);
								})}
							</select>
						</label>
					</div>

					<button
						className="btn btn-success mr-1"
						id="signin-btn2"
						disabled={!loading}
					>
						Sign in
					</button>
				</form>
			</div>
		);
	}
}
export default SignIn;
