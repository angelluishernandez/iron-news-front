import React from "react";
import IronNewsService from "../../services/IronNewsService";
import { Link, Redirect } from "react-router-dom";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import "./Login.css";

class Login extends React.Component {
	state = {
		data: {
			email: "",
			password: "",
		},
		error: false,
		loading: false,
	};

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ loading: true, error: false }, () => {
			IronNewsService.login({ ...this.state.data }).then(
				user => {
					this.props.setUser(user);
					this.props.getFolders()
				},
				() => {
					this.setState({
						error: true,
						loading: false,
					});
				}
			);
		});
	};

	handleBlur = event => {};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			data: {
				...this.state.data,
				[name]: value,
			},
		});
	};

	render() {
		const { data, error, loading } = this.state;
		const errorClassName = error ? "is-invalid" : "";
		if(this.props.currentUser){
			return <Redirect to="/"/>
		}
		return (
			<div className="Login">
				<form className="mb-4" onSubmit={this.handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							className={`form-control ${errorClassName}`}
							id="email"
							autoComplete="off"
							value={data.email}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Email"
							name="email"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className={`form-control ${errorClassName}`}
							id="password"
							autoComplete="off"
							value={data.password}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							placeholder="Password"
							name="password"
						/>
					</div>
					<button
						className="btn btn-success mr-1"
						id="login-btn"
						disabled={loading}
					>
						Log In
					</button>

					<div className="register">
						<Link to="/signin" className="btn btn-success" id="signin-btn">
							Sign In
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default WithAuthConsumer(Login);
