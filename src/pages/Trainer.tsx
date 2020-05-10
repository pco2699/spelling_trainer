import React from 'react'
import { Typography } from '@material-ui/core'
import { AuthCheck } from 'reactfire'

export default function Trainer() {
    return (
        <AuthCheck fallback={<div>Please Login</div>}>
            <Typography variant="h1">_ _ _ _ _ _</Typography>
        </AuthCheck>
    )
}

