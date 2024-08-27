import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { headerStyles } from '../styles/HeaderStyles';

/**
 * Componente Header
 * 
 * Este componente representa la barra superior de la aplicación, donde se muestra el título de la calculadora
 * y los iconos de redes sociales. Utiliza Material UI para los estilos y los iconos.
 * 
 * @returns {JSX.Element} La barra superior de la aplicación con el título y los iconos.
 */
const Header = () => (
    <AppBar position="static" sx={headerStyles.appBar}>
        <Toolbar>
            <Typography variant="h6" sx={headerStyles.title}>
                Lemon Earn Calculator
            </Typography>
            <IconButton color="inherit">
                <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
                <InstagramIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Header;
