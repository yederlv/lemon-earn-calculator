import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box } from '@mui/material';
import Results from './Results';
import { calculatorStyles } from '../styles/CalculatorStyles';

/**
 * Componente Calculator
 * 
 * Este componente permite a los usuarios ingresar la tasa de interés, la cantidad de criptomonedas que desean
 * invertir, y seleccionar la moneda. A partir de estos datos, calcula y muestra las ganancias estimadas
 * semanal, mensual y anual.
 * 
 * @returns {JSX.Element} El formulario de cálculo y los resultados.
 */
const Calculator = () => {
    const [interestRate, setInterestRate] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('BTC');
    const [result, setResult] = useState({ daily: 0, weekly: 0, monthly: 0, yearly: 0 });

    const currencies = [
        { value: 'BTC', label: 'Bitcoin (BTC)' },
        { value: 'ETH', label: 'Ethereum (ETH)' },
        { value: 'USDT', label: 'Tether (USDT)' }
    ];

    /**
     * Función para calcular los intereses
     * 
     * Esta función calcula las ganancias estimadas basadas en la tasa de interés y la cantidad
     * de criptomonedas ingresadas. Calcula el interés semanal, mensual y anual.
     */
    /*const calculateInterest = () => {
        const weeklyInterest = (amount * (interestRate / 100)) / 52;
        const monthlyInterest = weeklyInterest * 4;
        const yearlyInterest = weeklyInterest * 52;
        setResult({ weekly: weeklyInterest, monthly: monthlyInterest, yearly: yearlyInterest });
    };*/

    const calculateInterest = () => {
        const dailyInterest = (amount * (interestRate / 100)) / 365;
        const weeklyInterest = dailyInterest * 7;
        const monthlyInterest = weeklyInterest * 4;
        const yearlyInterest = weeklyInterest * 52;
        setResult({ daily: dailyInterest, weekly: weeklyInterest, monthly: monthlyInterest, yearly: yearlyInterest });
    };

    return (
        <Box sx={calculatorStyles.container}>
            <TextField
                label="Tasa de Interés (%)"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Cantidad a Invertir"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                select
                label="Moneda"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                fullWidth
                margin="normal"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" color="primary" onClick={calculateInterest} fullWidth sx={calculatorStyles.button}>
                Calcular
            </Button>
            <Results result={result} currency={currency} />
        </Box>
    );
};

export default Calculator;
