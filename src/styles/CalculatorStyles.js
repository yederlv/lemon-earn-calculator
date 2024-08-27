export const calculatorStyles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Para alinear ambos cuadros en la parte superior
        flexWrap: 'wrap', // Para que se adapten en pantallas más pequeñas
    },
    box: {
        backgroundColor: '#1f1f1f', // DARK GRAY
        color: '#FFFFFF', // WHITE
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Poppins, sans-serif',
        width: '100%', // Ocupar todo el ancho del contenedor padre
        maxWidth: '48%', // Asegurar que ambos cuadros tengan el mismo tamaño
        boxSizing: 'border-box', // Para incluir padding y borde en el tamaño
    },
    header: {
        marginBottom: '1rem',
        color: '#00F068', // GREEN (Greent)
        fontSize: '1.5rem',
        fontWeight: '600',
    },
    currencyBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        fontFamily: 'Poppins, sans-serif',
    },
    textField: {
        backgroundColor: '#2c2c2c', // DARKER GRAY
        '& .MuiInputBase-input': {
            color: '#FFFFFF', // WHITE
            fontFamily: 'Poppins, sans-serif',
        },
        '& .MuiInputLabel-root': {
            color: '#B0B0B0', // LIGHTER GRAY
            fontFamily: 'Poppins, sans-serif',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#444', // GRAY
            },
            '&:hover fieldset': {
                borderColor: '#00F068', // GREEN (Greent)
            },
            '&.Mui-focused fieldset': {
                borderColor: '#00F068', // GREEN (Greent)
            },
            fontFamily: 'Poppins, sans-serif',
        },
        marginBottom: '1rem', // Espaciado uniforme
    },
    iconBox: {
        marginLeft: '0.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00F068', // GREEN (Greent)
        color: '#000000', // BLACK
        '&:hover': {
            backgroundColor: '#00E060', // Slightly darker Green
            color: '#000000', // BLACK
        },
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        marginTop: '1rem', // Para espaciarlo de los campos
    },
    resultBox: {
        backgroundColor: '#2c2c2c', // DARKER GRAY
        color: '#FFFFFF', // WHITE
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Poppins, sans-serif',
        width: '100%', // Asegurar que ambos cuadros tengan el mismo tamaño
        maxWidth: '48%', // Asegurar que ambos cuadros tengan el mismo tamaño
        boxSizing: 'border-box', // Para incluir padding y borde en el tamaño
    },
    resultHeader: {
        color: '#00F068', // GREEN (Greent)
        marginBottom: '1rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
    },
    resultText: {
        color: '#FFFFFF', // WHITE
        marginBottom: '0.5rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
    },
    note: {
        marginTop: '1rem',
        fontSize: '0.85rem',
        color: '#B0B0B0', // LIGHTER GRAY
        textAlign: 'center', // Centra el texto para una mejor apariencia
        fontFamily: 'Poppins, sans-serif',
        width: '100%', // Asegura que el texto ocupa todo el ancho disponible
    },
};
