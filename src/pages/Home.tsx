import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import signin_btn from '../images/google_signin_btn.png';
import signin_btn2x from '../images/google_signin_btn@2x.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <h1>the deadly simple spell trainer</h1>
                <img src={signin_btn} srcSet={`${signin_btn2x} 2x`} />
                Already have an account? Login
            </div>
        </Container>
    )
}