import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from "../store";
import Dashboard from "./tasks/dashboard";
import Header from "./layout/header";
import Register from "./accounts/register";
import Login from "./accounts/login";
import PrivateRoute from "./PrivateRoute"
import { loadUser } from "../actions/auth";

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Header />
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));