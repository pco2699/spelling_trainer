import React from 'react';
import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home"
import { Theme } from "./styles/Theme"

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        Spelling Trainer
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
