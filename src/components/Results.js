import React from 'react';
import { Typography, Box } from '@mui/material';

/**
 * Componente Results
 * 
 * Este componente muestra los resultados de las ganancias estimadas calculadas por el componente Calculator.
 * Las ganancias se presentan en periodos semanal, mensual y anual.
 * 
 * @param {Object} props - Las propiedades pasadas al componente.
 * @param {Object} props.result - Objeto que contiene las ganancias calculadas.
 * @param {string} props.currency - La moneda seleccionada para la inversión.
 * 
 * @returns {JSX.Element} La visualización de los resultados de ganancias.
 */
const Results = ({ result, currency }) => (
    <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Ganancias Estimadas:</Typography>
        <Typography>Semanal: {result.weekly.toFixed(2)} {currency}</Typography>
        <Typography>Mensual: {result.monthly.toFixed(2)} {currency}</Typography>
        <Typography>Anual: {result.yearly.toFixed(2)} {currency}</Typography>
    </Box>
);

export default Results;
