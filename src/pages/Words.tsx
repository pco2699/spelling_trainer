import React from 'react';
import WordTable from '../components/WordTable';
import { AuthCheck } from 'reactfire';

export default function Words() {
    return (
        <AuthCheck fallback={<div>Please Login</div>}>
            <WordTable />
        </AuthCheck>
    )
}
