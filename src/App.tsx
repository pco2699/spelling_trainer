import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    Spell Trainer
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
