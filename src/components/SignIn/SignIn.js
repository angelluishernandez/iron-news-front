import React from "react";
import customCategoriesArray from "../../constants/customCategories";

class SignIn extends React.Component {
	state = {
		data: {
			name: "",
			email: "",
			password: "",
			profilePic: "",
			organization: "",
			collaborators: "",
			customCategories: "",
		},
		error: false,
		loading: true,
	};

	render() {
		const { data, error, loading } = this.state;
		const errorClassName = error ? "is-invalid" : "";
		return (
			<div className="Login">
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
							className={`form-control ${errorClassName}`}
							autoComplete="off"
							value={data.profilePic}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Your password"
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
						<label htmlFor="organization">
							Choose some categories
							<select
								onChange={this.handleChange}
								value={data.customCategories}
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
						id="login-btn"
						disabled={loading}
					>
						Log In
					</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
