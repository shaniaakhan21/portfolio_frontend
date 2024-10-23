"use client";
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import WorkExperience from './Workbox';
import VolunteerExperience from './Volunteer';

const RightSidebar: React.FC = () => {


    return (
        <aside className="w-full lg:w-1/6 h-fit top-10 md:top-0 lg:top-16 relative md:relative lg:fixed mt-2 sm:mt-0">
            <div className='rounded-xl shadow-md px-4 py-3 bg-white '>
                <div>
                    <div className='flex flex-row justify-start pb-1 items-center icons-ph'>
                        <LocalPhoneIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        <p>
                            +971-54-5764531
                        </p>
                    </div>
                    <div className='flex flex-row justify-start pb-1 items-center icons-ph'>
                        <MailIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        <p>
                            shaniaakhan21@gmail.com
                        </p>
                    </div>
                    <div className='flex flex-row justify-start pb-1 items-center icons-ph'>
                        <MyLocationIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        <p>
                            Dubai, U.A.E
                        </p>
                    </div>
                </div>
            </div>

            <div className='rounded-xl shadow-md px-4 py-3 bg-white mt-4'>
                <WorkExperience />
            </div>

            <div className='rounded-xl shadow-md px-4 py-3 bg-white mt-4'>
                <VolunteerExperience />
            </div>

        </aside>
    );
};

export default RightSidebar;
