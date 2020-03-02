import React, { createContext } from "react";
import IronNewsService from "../services/IronNewsService";

const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
	state = {
		user: JSON.parse(localStorage.getItem("user")),
	};

	setUser = user => {
		console.log("entra en set user => ", user)
		localStorage.setItem("user", user ? JSON.stringify(user) : null);
		this.setState({ user });
	};
	logout = () => {
		IronNewsService.logout().then(() => {
			this.setUser();
		});
	};

	// componentDidMount() {
	// 	// const userId = this.state.user._id;
	// 	// IronNewsService.getUser(userId)
	// 	// 	.then(user => {
	// 	// 		this.setUser(user);
	// 	// 	})
	// 	// 	.catch(error => console.log(error));
	// }
	componentDidUpdate(_, prevState){
	
		if(prevState.user !== this.state.user){
			console.log("entra en component did update", this.state.user)
			return true
		}
	}
	// componentDidUpdate(_, prevState) {
	// 	console.log("this is the prevState => ", prevState.user);
	// 	console.log("this is the current state=> ", this.state.user);
	// 	if (prevState.user !== this.state.user) {
	// 		const userId = this.state.user._id;
	// 		IronNewsService.getUser(userId)
	// 			.then(user => {
	// 				this.setUser(user);
	// 				debugger
	// 			})
	// 			.catch(error => console.log(error));
	// 	}
	// 	return true
	// }
	render() {
		const value = {
			currentUser: this.state.user,
			setUser: this.setUser,
			logout: this.logout,
		};
		return (
			<AuthContext.Provider value={value}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export const WithAuthConsumer = WrappedComponent => props => (
	<AuthContext.Consumer>
		{authProps => <WrappedComponent {...props} {...authProps} />}
	</AuthContext.Consumer>
);

export default AuthContext;
