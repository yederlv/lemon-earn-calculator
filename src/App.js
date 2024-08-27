import React from 'react';
import { Container, Paper } from '@mui/material';
import Calculator from './components/Calculator';
import { appStyles } from './styles/AppStyles';

function App() {
    return (
        <Container maxWidth="md" sx={appStyles.container}>
            <Paper elevation={3} sx={appStyles.paper}>
                <Calculator />
            </Paper>
        </Container>
    );
}

export default App;
