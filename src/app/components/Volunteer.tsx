"use client";
import React from 'react';
import { Box } from '@mui/material';
import GoGirl from '../../assets/images/logos/gogirl.png';
import Image from 'next/image';
import Link from 'next/link';

const VolunteerExperience: React.FC = () => {

    return (
        <Box>
            <h2 className='text-lg font-bold mb-2'>Volunteer Work</h2>
            <div>
                <div className='flex flex-row items-center justify-start lg:justify-between'>
                    <Link href='https://www.gogirlorganisation.com/' target='_blank'>
                        <Image src={GoGirl} width={50}
                            height={50} alt='Go Girl Logo'
                        />
                    </Link>
                    <div className='pl-4 lg:pl-0 sm:pr-4'>

                        <h2 className='text-sm font-semibold'>
                            Chief Operating Officer
                        </h2>
                        <Link href='https://www.gogirlorganisation.com/' target='_blank'>
                            <h2 className='text-xs font-semibold'>
                                <span className='hover:text-[#DC1A7E]'>Go Girl Organisation</span> <br /><span className='text-xs font-normal text-[#0a66c2] hover:no-underline'>Aug 2022 - Present</span></h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default VolunteerExperience;
