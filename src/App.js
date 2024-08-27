import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import { Container } from '@mui/material';
import { GlobalStyles } from './styles/GlobalStyles';

/**
 * Componente principal de la aplicación
 * 
 * Combina los componentes Header, Calculator y aplica los estilos globales.
 * 
 * @returns {JSX.Element} La estructura principal de la aplicación.
 */
function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container maxWidth="sm" sx={{ padding: 4 }}>
                <Calculator />
            </Container>
        </>
    );
}

export default App;
