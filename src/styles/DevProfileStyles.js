export const devProfileStyles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        //backgroundColor: '#1f1f1f', // DARK GRAY similar to the calculator's background
        padding: '1rem',
        //borderRadius: '8px',
        //boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        //width: '100%',
        boxSizing: 'border-box',
    },
    videoContainer: {
        width: '60px',
        height: '60px',
        overflow: 'hidden',
        borderRadius: '50%', // Redondeado como un avatar
        border: '2px solid #00F068', // GREEN border around the avatar
    },
    avatar: {
        width: '60px',
        height: '60px',
        border: '2px solid #00F068', // GREEN border around the avatar
    },
    name: {
        color: '#FFFFFF', // WHITE
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        marginBottom: '0.25rem',
    },
    username: {
        color: '#00F068', // GREEN
        fontFamily: 'Poppins, sans-serif',
    },
    socialIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    icon: {
        color: '#FFFFFF', // WHITE
        cursor: 'pointer',
        '&:hover': {
            color: '#00F068', // GREEN on hover
        },
    },
};
