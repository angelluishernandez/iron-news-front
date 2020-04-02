import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import {store} from "./redux/store/store";
import { history } from "./helpers/history";

// const store = configStore();
const state = store.getState();


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
