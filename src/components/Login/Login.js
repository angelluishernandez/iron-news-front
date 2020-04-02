import React from "react";
import { Link, Redirect } from "react-router-dom";
import { userActions } from "../../redux/actions/user.actions";
import { connect } from "react-redux";

class Login extends React.Component {
	state = {
		data: {
			email: "",
			password: "",
		},
		submited: false,
	};

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
			submited: true,
		});
		console.log("this are the props on submit => ", this.props)
		const { email, password } = this.state.data;
		const { dispatch, history } = this.props;
		if (email && password) {
			dispatch(userActions.doLogin({ email, password }));
			
		}

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

	handleClick = event => {
		const { dispatch } = this.props;
		dispatch(userActions.logout());
	};

	render() {
		const { data, error, loading } = this.state;
		const errorClassName = error ? "is-invalid" : "";
		if (this.props.currentUser) {
			return <Redirect to={`/${this.props.currentUser._id}`} />;
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
				<div>
					<button className="btn btn-success">
						{" "}
						<Link to={"/signin"}>Create an account</Link>
					</button>
				</div>
				<button onClick={this.handleClick}>LogOut</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loggedIn } = state.authentication;
	return {
		loggedIn,
	};
};

export default connect(mapStateToProps)(Login);
