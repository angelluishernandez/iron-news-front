import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { history } from "./helpers/history";
import PropTypes from "prop-types";

// const store = configStore();
const state = store.getState();

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/:filter?" component={App} />
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

serviceWorker.unregister();
