import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Bar from "./components/bar";
import Home from "./components/home";
import Pie from "./components/pie";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bar-charts" component={Bar} />
                <Route exact path="/bar-charts" component={Pie} />
            </Switch>
        </Router>
    );
}

export default App;
