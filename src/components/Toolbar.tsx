import React, { useState, useEffect } from 'react';
import { Toolbar, Typography, Button } from '@material-ui/core'
import { useUser, useAuth } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuText: {
        marginRight: theme.spacing(2),
    },
}));

export default function MyToolbar() {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    useEffect(() => {
        setIsLoggedIn(!!user);
    }, [user])

    async function logout() {
        await auth.signOut();
        history.push('/');
    }

    const LoggedInToolbar = (
        <>
            <div className={classes.grow}>
                <Button color="inherit" component={RouterLink} to={"/words"} >Words</Button>
                <Button color="inherit" component={RouterLink} to={"/test"} >Test</Button>
            </div>
            <Button color="inherit" onClick={logout}>Logout</Button>
        </>
    )

    return (
            <Toolbar>
                <Typography variant="h5" className={classes.menuText}>
                    Spelling Trainer
                </Typography>
                { isLoggedIn ? LoggedInToolbar : "" }
            </Toolbar>
    )
}