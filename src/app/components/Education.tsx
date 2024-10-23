"use client";
import React from 'react';
import { Box } from '@mui/material';
import Bits from '../../assets/images/edu/bitspilanilogo.png';
import UTU from '../../assets/images/edu/utu.png';
import Image from 'next/image';
import Link from 'next/link';

const Education: React.FC = () => {

    return (
        <>
            <Box className='bg-white hover:bg-[#dee2e645] rounded-xl p-4 shadow-md'>

                <div className='flex flex-row items-center justify-between'>
                    <Link href='https://www.bits-pilani.ac.in/' target='_blank'>
                        <Image src={Bits} width={80}
                            height={80} alt='Bits Pilani Logo'
                        />
                    </Link>
                    <div className='pl-2'>

                        <h2 className='text-xs sm:text-base font-semibold'>
                            MTech in Machine Learning and Artificial Intelligence
                        </h2>
                        <Link href='https://www.bits-pilani.ac.in/' target='_blank'>
                            <h2 className='text-[10px] sm:text-sm font-semibold'>
                                <span className='hover:text-[#DC1A7E] hover:underline'>Birla Institute of Technology and Science, Pilani</span> <br />
                                <span className='text-[10px] sm:text-xs text-[#0a66c2]'>2023 - 2025*</span></h2>
                        </Link>
                    </div>
                </div>
            </Box>
            <Box className='bg-white hover:bg-[#dee2e645] rounded-xl p-4 mt-4 shadow-md'>

                <div className='flex flex-row items-center justify-between'>
                    <Link href='https://uktech.ac.in/en' target='_blank'>
                        <Image src={UTU} width={80}
                            height={80} alt='Uttarakhand technical University Logo'
                        />
                    </Link>
                    <div className='pl-2'>

                        <h2 className='text-xs sm:text-base font-semibold'>
                            BTech in Computer Science and Engineering (Honors)
                        </h2>
                        <Link href='https://uktech.ac.in/en' target='_blank'>
                            <h2 className='text-[10px] sm:text-sm font-semibold'>
                                <span className='hover:text-[#DC1A7E] hover:underline'>Uttarakhand Technical University, India</span> <br />
                                <span className='text-[10px] sm:text-xs text-[#cb112d]'>2017 - 2021</span></h2>
                        </Link>
                    </div>
                </div>
            </Box>
        </>

    );
};

export default Education;
