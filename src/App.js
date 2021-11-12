import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Bar from "./components/bar";
import Home from "./components/home";
import Nav from "./components/nav";
import Pie from "./components/pie";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 1em;

    @media (min-width: 1024px) {
        padding: 2em;
    }
`;

function App() {
    return (
        <Router>
            <Main>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bar-charts" component={Bar} />
                    <Route exact path="/bar-charts" component={Pie} />
                </Switch>
            </Main>
        </Router>
    );
}

export default App;
