import { createMuiTheme } from '@material-ui/core';
import { overpass } from './Font'

export const Theme = createMuiTheme({
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