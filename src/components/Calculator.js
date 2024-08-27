import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box, Typography, Divider } from '@mui/material';
import DevProfile from './DevProfile'; // Importa el componente DevProfile
import { calculatorStyles } from '../styles/CalculatorStyles';
import BTCImage from '../assets/images/bitcoin.png';
import ETHImage from '../assets/images/ethereum.png';
import USDCImage from '../assets/images/usdc.png';
import DAIImage from '../assets/images/dai.png';
import MATICImage from '../assets/images/polygon.png';
import USDTImage from '../assets/images/tether.png';

const Calculator = () => {
    const [interestRate, setInterestRate] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('BTC');
    const [result, setResult] = useState(null);

    const currencies = [
        { value: 'BTC', label: 'Bitcoin (BTC)', image: BTCImage },
        { value: 'ETH', label: 'Ethereum (ETH)', image: ETHImage },
        { value: 'USDT', label: 'Tether (USDT)', image: USDTImage },
        { value: 'USDC', label: 'USD COIN (USDC)', image: USDCImage },
        { value: 'DAI', label: 'Dai (DAI)', image: DAIImage },
        { value: 'MATIC', label: 'Poligon (MATIC)', image: MATICImage }
    ];

    const calculateInterest = () => {
        const dailyInterest = (amount * (interestRate / 100)) / 365;
        const weeklyInterest = dailyInterest * 7;
        const monthlyInterest = dailyInterest * 30;
        const yearlyInterest = dailyInterest * 365;
        setResult({ daily: dailyInterest, weekly: weeklyInterest, monthly: monthlyInterest, yearly: yearlyInterest });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            calculateInterest();
        }
    };

    const selectedCurrency = currencies.find(curr => curr.value === currency);

    return (
        <Box sx={calculatorStyles.container}>
            <DevProfile /> {/* Agrega el componente DevProfile */}
            <Box sx={calculatorStyles.content}>
                <Box sx={calculatorStyles.box}>
                    <Box sx={calculatorStyles.currencyBox}>
                        <TextField
                            select
                            label="Moneda"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            fullWidth
                            margin="normal"
                            sx={calculatorStyles.textField}
                            onKeyPress={handleKeyPress}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box sx={calculatorStyles.iconBox}>
                            <img src={selectedCurrency.image} alt={selectedCurrency.label} style={{ width: '30px', height: '30px' }} />
                        </Box>
                    </Box>
                    <TextField
                        label="Tasa de Interés (%)"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        fullWidth
                        margin="normal"
                        type="number"
                        sx={calculatorStyles.textField}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        label="Cantidad a Invertir"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                        margin="normal"
                        type="number"
                        sx={calculatorStyles.textField}
                        onKeyPress={handleKeyPress}
                    />
                    <Divider sx={{ marginY: '1rem', backgroundColor: '#444' }} />
                    <Button
                        variant="contained"
                        onClick={calculateInterest}
                        fullWidth
                        sx={calculatorStyles.button}
                    >
                        Calcular
                    </Button>
                </Box>

                <Box sx={calculatorStyles.resultBox}>
                    <Typography variant="h6" sx={calculatorStyles.resultHeader}>Resultado</Typography>
                    {result ? (
                        <>
                            <Typography sx={calculatorStyles.resultText}>Tasa de interés: {interestRate}%</Typography>
                            <Typography sx={calculatorStyles.resultText}>Cantidad a Invertir: {amount} {currency}</Typography>
                            <Typography sx={calculatorStyles.resultText}>Ganancia Diaria: {result.daily.toFixed(8)} {currency}</Typography>
                            <Typography sx={calculatorStyles.resultText}>Ganancia Semanal: {result.weekly.toFixed(8)} {currency}</Typography>
                            <Typography sx={calculatorStyles.resultText}>Ganancia Mensual: {result.monthly.toFixed(8)} {currency}</Typography>
                            <Typography sx={calculatorStyles.resultText}>Ganancia Anual: {result.yearly.toFixed(8)} {currency}</Typography>
                        </>
                    ) : (
                        <Typography sx={calculatorStyles.resultText}>Introduce los datos para calcular.</Typography>
                    )}
                </Box>
            </Box>

            <Typography sx={calculatorStyles.note}>
                * El resultado del cálculo es estimado y puede variar dependiendo de las condiciones del mercado.
            </Typography>
        </Box>
    );
};

export default Calculator;
