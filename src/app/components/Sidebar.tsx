"use client";
import React from 'react';
import ProfileLogo from '../../assets/images/profilepic.png';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip
import HTML from '../../assets/images/tech/HTML5.png';
import CSSLogo from '../../assets/images/tech/CSS3.png';
import TailwindCSS from '../../assets/images/tech/Tailwind CSS.png';
import JS from '../../assets/images/tech/JavaScript.png';
import ReactLogo from '../../assets/images/tech/React.png';
import NextLogo from '../../assets/images/tech/Next.js.png';
import NodeLogo from '../../assets/images/tech/Node.js.png';
import MongoDBLogo from '../../assets/images/tech/MongoDB.png';
import PostgreSQL from '../../assets/images/tech/PostgresSQL.png';
import SQL from '../../assets/images/tech/MySQL.png';
import Django from '../../assets/images/tech/django-logo-positive.png';
import python from '../../assets/images/tech/Python.png';
import illus from '../../assets/images/tech/Adobe Illustrator.png';
import photoshop from '../../assets/images/tech/Adobe Photoshop.png';
import Xd from '../../assets/images/tech/Adobe XD.png';
import Figma from '../../assets/images/tech/Figma.png';
import Flutter from '../../assets/images/tech/Flutter.png';
import Canva from '../../assets/images/tech/Canva.png';
import Docker from '../../assets/images/tech/Docker.png';
import AWS from '../../assets/images/tech/AWS.png';
import Git from '../../assets/images/tech/Git.png';
import Github from '../../assets/images/tech/GitHub.png';
import Nginix from '../../assets/images/tech/NGINX.png';
import Heroku from '../../assets/images/tech/Heroku.png';
import Typscript from '../../assets/images/tech/TypeScript.png';
import './sidebar.css'
import BasicInfo from './Basicinfo';

const skills = [
    { logo: HTML, name: "HTML5" },
    { logo: CSSLogo, name: "CSS3" },
    { logo: TailwindCSS, name: "Tailwind CSS" },
    { logo: JS, name: "JavaScript" },
    { logo: ReactLogo, name: "React" },
    { logo: NextLogo, name: "Next.js" },
    { logo: NodeLogo, name: "Node.js" },
    { logo: MongoDBLogo, name: "MongoDB" },
    { logo: PostgreSQL, name: "PostgreSQL" },
    { logo: SQL, name: "MySQL" },
    { logo: Django, name: "Django" },
    { logo: python, name: "Python" },
    { logo: illus, name: "Adobe Illustrator" },
    { logo: photoshop, name: "Adobe Photoshop" },
    { logo: Xd, name: "Adobe XD" },
    { logo: Figma, name: "Figma" },
    { logo: Flutter, name: "Flutter" },
    { logo: Canva, name: "Canva" },
    { logo: Docker, name: "Docker" },
    { logo: AWS, name: "AWS" },
    { logo: Git, name: "Git" },
    { logo: Github, name: "GitHub" },
    { logo: Nginix, name: "NGINX" },
    { logo: Heroku, name: "Heroku" },
    { logo: Typscript, name: "TypeScript" },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="w-full sm:w-[31%] md:w-[33%] lg:w-1/6 h-fit top-12 sm:top-16 relative sm:fixed">
            <div className='rounded-xl shadow-md p-4 bg-white'>
                <div className="mb-2 flex justify-center flex-col items-center">
                    <div className='bg-sidebar'></div>
                    <div className='rounded-full border-white border-4 w-fit z-10'>
                        <Link href='/'>
                            <Image
                                src={ProfileLogo}
                                alt="Profile"
                                className="w-[114px] h-[112px] rounded-full mx-auto z-10"
                            />
                        </Link>
                    </div>
                    <h1 className="text-center text-xl font-bold mt-1 sm:mt-4">Shaniya Khan</h1>
                    <p className="text-center text-gray-600 mb-2 text-xs">Coding your dreams into reality<br />one pixel at a time.</p>
                    <div className='flex flex-row justify-between w-3/4 mt-2'>
                        <Link href="https://github.com/shaniaakhan21" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <GitHubIcon id='social-icons'/>
                        </Link>
                        <Link href="https://linkedin.com/in/codewithshaniya" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <LinkedInIcon id='social-icons'/>
                        </Link>
                        <Link href="https://calendly.com/shaniyakhan/meeting-with-shaniya?month=2024-09" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <EditCalendarIcon id='social-icons'/>
                        </Link>
                        <Link href="/" className="icon-link">
                            <LanguageIcon id='social-icons'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <BasicInfo className="block sm:hidden" />
            </div>
            <div className='rounded-xl shadow-md p-4 bg-white mt-4 hidden sm:block'>
                <h2 className='text-lg font-bold mb-2'>Technical Skills</h2>
                <div className="grid grid-cols-5 gap-0">
                    {skills.map((skill, index) => (
                        <Tooltip title={skill.name} key={index} arrow>
                            <div className="flex justify-center items-center p-2">
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={30}
                                    height={30}
                                    className="rounded-md cursor-pointer"
                                />
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
