"use client";
import React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { grey } from '@mui/material/colors';
import ProfileLogo from '../../assets/images/profilepic.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                color: grey[50],
                padding: '0 2rem',
                textAlign: 'center',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
            className='mt-12'
        >
            <Box
                className='flex flex-col-reverse sm:flex-row justify-between items-center gap-1 py-6'
            >
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <IconButton
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'black' }}
                    >
                        <GitHubIcon className='icon-link' />
                    </IconButton>
                    <IconButton
                        href="https://www.linkedin.com/in/yourusername/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'black' }}
                    >
                        <LinkedInIcon className='icon-link' />
                    </IconButton>
                    <IconButton
                        href="https://calendly.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'black' }}
                    >
                        <CalendarTodayIcon className='icon-link' />
                    </IconButton>
                    <IconButton
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'black' }}
                    >
                        <LanguageIcon className='icon-link' />
                    </IconButton>
                </Box>
                <Box className='py-4 flex items-center justify-between'>
                    <div className='pr-3'>
                        <div className='flex flex-row justify-end items-center text-black text-xs sm:text-lg mb-2'>
                            <LocalPhoneIcon className='mr-2 text-sm sm:text-base mt-1' sx={{ color: '#000' }} />
                            +971-54-5764531
                        </div>
                        <div className='flex flex-row justify-end items-center text-black text-xs sm:text-lg'>
                            <MailIcon className='mr-2 text-sm sm:text-xl mt-1' sx={{ color: '#000' }} />
                            shaniaakhan21@gmail.com
                        </div>
                    </div>
                    <div className='rounded-full border-white border-4 w-fit z-10'>
                        <Link href='https://www.linkedin.com/in/codewithshaniya/' target="_blank"
                            rel="noopener noreferrer">
                            <Image
                                src={ProfileLogo}
                                alt="Profile"
                                className="w-[80px] h-[80px] sm:w-[98px] sm:h-[98px] rounded-full mx-auto z-10"
                            />
                        </Link>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
