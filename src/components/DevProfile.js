import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';
import { devProfileStyles } from '../styles/DevProfileStyles';
import DevProfileLemon from '../assets/images/raccoondev.png';
//import DevProfileLemon from '../assets/images/DevProfileLemon.mp4';

const DevProfile = () => {
    return (
        <Box sx={devProfileStyles.container}>
            {/* Usar NFT Lemon */}
            {/*<Box sx={devProfileStyles.videoContainer}>
                <video
                    src={DevProfileLemon}
                    autoPlay
                    loop
                    muted
                    style={devProfileStyles.avatar}
                />
            </Box>*/}
            <Avatar
                alt="Raccon Dev"
                src={DevProfileLemon} // Ruta de la imagen del avatar
                sx={devProfileStyles.avatar}
            />
            <Box>
                <Typography variant="h6" sx={devProfileStyles.name}>
                    Yeder 
                </Typography>
                <Typography variant="body2" sx={devProfileStyles.username}>
                    🍋
                    <Link 
                        href="https://lat.lemon.me/$raccoondev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ color: '#00F068', textDecoration: 'none' }}
                    >
                        $Raccoondev
                    </Link>
                </Typography>
                <Box sx={devProfileStyles.socialIcons}>
                    <Link href="https://github.com/yederlv" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={devProfileStyles.icon} />
                    </Link>
                    <Link href="https://twitter.com/yederlvicente" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={devProfileStyles.icon} />
                    </Link>
                    <Link href="https://www.instagram.com/yeder.dev" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={devProfileStyles.icon} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default DevProfile;
