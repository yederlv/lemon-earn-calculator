import { createGlobalStyle } from 'styled-components';

/**
 * Estilos globales
 * 
 * Define los estilos globales para toda la aplicación, incluyendo la tipografía y el color de fondo.
 */
export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #e0f7fa;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
