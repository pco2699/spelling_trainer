import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from '../App';
import { overpass } from './Font'

export default function Theme() {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'Overpass, Arial',
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': [overpass],
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {App}
        </ThemeProvider>
    );
}
