import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "../containers/Home";
import Notfound from "../containers/notFound";
import "../assets/styles/App.scss";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default App;
