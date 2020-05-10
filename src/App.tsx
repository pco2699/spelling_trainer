import React, { Suspense } from 'react';
import { AppBar, CssBaseline, Container } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import Words from "./pages/Words";
import MyToolbar from './components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function App() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Router>
                <AppBar position="static">
                    <Suspense fallback={<div></div>}>
                        <MyToolbar />
                    </Suspense>
                </AppBar>
                <Container component="main" maxWidth="xl" className={classes.container}>
                    <Switch>
                        <Route path="/test">
                            <Suspense fallback={<div></div>}>
                                <Trainer />
                            </Suspense>
                        </Route>
                        <Route path="/words">
                            <Suspense fallback={<h1></h1>}>
                                <Words />
                            </Suspense>
                        </Route>
                        <Route path="/">
                            <Suspense fallback={<h1></h1>}>
                                <Home />
                            </Suspense>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </>
    );
}
