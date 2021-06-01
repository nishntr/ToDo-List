import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import Dashboard from "./tasks/dashboard";
import Header from "./layout/header";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <Dashboard />
                </React.Fragment>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));