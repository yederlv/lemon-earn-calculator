export const calculatorStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '800px',
        gap: '1rem',
        flexWrap: 'wrap', // Para apilar los cuadros en pantallas pequeñas
    },
    box: {
        backgroundColor: '#1f1f1f', // DARK GRAY
        color: '#FFFFFF', // WHITE
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Poppins, sans-serif',
        flex: '1 1 48%',
        boxSizing: 'border-box',
        minWidth: '280px', // Asegura que los cuadros tengan un tamaño mínimo en pantallas pequeñas
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
            color: '#FFFFFF',
            fontFamily: 'Poppins, sans-serif',
        },
        '& .MuiInputLabel-root': {
            color: '#B0B0B0',
            fontFamily: 'Poppins, sans-serif',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#444',
            },
            '&:hover fieldset': {
                borderColor: '#00F068', // GREEN (Greent)
            },
            '&.Mui-focused fieldset': {
                borderColor: '#00F068',
            },
            fontFamily: 'Poppins, sans-serif',
        },
        marginBottom: '1rem',
    },
    iconBox: {
        marginLeft: '0.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00F068', // GREEN (Greent)
        color: '#000000',
        '&:hover': {
            backgroundColor: '#00E060', // Slightly darker Green
            color: '#000000',
        },
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        marginTop: '1rem',
    },
    resultBox: {
        backgroundColor: '#2c2c2c',
        color: '#FFFFFF',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Poppins, sans-serif',
        flex: '1 1 48%',
        boxSizing: 'border-box',
        minWidth: '280px',
    },
    resultHeader: {
        color: '#00F068',
        marginBottom: '1rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
    },
    resultText: {
        color: '#FFFFFF',
        marginBottom: '0.5rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
    },
    note: {
        marginTop: '1rem',
        fontSize: '0.85rem',
        color: '#B0B0B0',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
    },
};
