import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Test from "./redux-test/Test";

ReactDOM.render(
	// <Provider store={store}>
		<BrowserRouter>
			<AuthContextProvider>
			<App/>
			</AuthContextProvider>
		</BrowserRouter>, 
	// </Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
