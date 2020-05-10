import React from 'react';
import signin_btn from '../images/google_signin_btn.png';
import signin_btn2x from '../images/google_signin_btn@2x.png';

import { Typography, makeStyles } from '@material-ui/core';
import { useAuth } from 'reactfire';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function Home() {
    const classes = useStyles();
    const provider = new useAuth.GoogleAuthProvider();
    const auth = useAuth();
    const history = useHistory();

    async function login() {
        await auth.signInWithPopup(provider);
        history.push("/words");
    }

    return (
        <div className={classes.main}>
            <Typography variant='h3'>the deadly simple spelling trainer</Typography>
            <img alt="google-signin" onClick={login} src={signin_btn} srcSet={`${signin_btn2x} 2x`} style={{marginTop: "20px"}} />
        </div>
    )
}