"use client";
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
// import { useTheme } from '../../context/ThemeProvider';
// import BlackLogo from '../../assets/images/logos/Shaniya-black.png';
// import WhiteLogo from '../../assets/images/logos/Shaniya-white.png';
// import PinkLogo from '../../assets/images/logos/Shaniya-pink.png';
// import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Header: React.FC = () => {
    // const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll events to add/remove blur effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine logo based on the current theme
    // const getLogoSrc = () => {
    //     switch (theme) {
    //         case 'dark':
    //             return WhiteLogo;
    //         case 'pink':
    //             return BlackLogo;
    //         case 'light':
    //             return PinkLogo;
    //         default:
    //             return WhiteLogo; // Fallback logo
    //     }
    // };

    // Determine icon styles based on the current theme
    // const getIconStyles = (mode: string) => {
    //     const inactiveOpacity = theme === mode ? 1 : 0.5;
    //     switch (theme) {
    //         case 'dark':
    //             return { color: theme === mode ? 'rgba(255, 255, 255, 1)' : `rgba(255, 255, 255, ${inactiveOpacity})` };
    //         case 'light':
    //             return { color: theme === mode ? 'rgba(255, 218, 36, 1)' : `rgba(0, 0, 0, ${inactiveOpacity})` };
    //         case 'pink':
    //             return { color: theme === mode ? 'rgba(251, 1, 126, 1)' : `rgba(251, 1, 126, ${inactiveOpacity})` };
    //         default:
    //             return { color: `rgba(0, 0, 0, ${inactiveOpacity})` }; // Fallback color
    //     }
    // };

    return (
        <AppBar position="fixed" className={`transition-all duration-300 ${isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-transparent'} shadow-none`}>
            <Toolbar className="flex flex-row justify-between w-full">
                {/* Logo on the left */}
                <Typography variant="h6" component="div" className='w-1/2'>
                    <Link href='/'>
                        {/* <Image
                            src={getLogoSrc()}
                            alt='Shaniya Logo'
                            width={120}
                            height={40}
                            className="object-contain"
                        /> */}
                        <HomeIcon sx={{ color: '#CC0088' }} id='social-icons'/>
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" className='w-1/2 text-end'>
                    <Link href="/assets/pdfs/Shaniya_Khan_resume.pdf" target="_blank" rel="noopener noreferrer" download>
                        <DownloadForOfflineIcon sx={{ color: '#CC0088' }} id='social-icons'/>
                    </Link>
                </Typography>
                {/* Theme toggle icons on the right */}
                {/* <div className="flex items-center justify-end space-x-4 w-1/2">
                    <IconButton
                        aria-label="light mode"
                        onClick={() => toggleTheme('light')}
                        style={getIconStyles('light')}
                        className='hidden'
                    >
                        <Brightness7Icon />
                    </IconButton>
                    <IconButton
                        aria-label="dark mode"
                        onClick={() => toggleTheme('dark')}
                        style={getIconStyles('dark')}
                        className='hidden'
                    >
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton
                        aria-label="pink mode"
                        onClick={() => toggleTheme('pink')}
                        style={getIconStyles('pink')}
                        className='hidden'
                    >
                        <LocalFloristIcon />
                    </IconButton>
                </div> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
