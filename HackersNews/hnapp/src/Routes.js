import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from './components/dashboard/Dashboard';
import Chart from './components/Chart/Chart';
import Details from './components/Details/Details';
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/Chart" component={Chart} />
                    <Route path="/Details" component={Details} />
                </Switch>
            </Router>
        )
    }
}