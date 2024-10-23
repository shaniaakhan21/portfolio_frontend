'use client';
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import CweImage from '../../assets/images/work/CWEB.png';
import SnapImage from '../../assets/images/work/SnapPartners.png';
import Premierx4freeImage from '../../assets/images/work/premierx4free.png';
import EmaysImage from '../../assets/images/work/Emays/8.png';
import NGImage from '../../assets/images/work/NUMBERSGAME.png';
import PortfolioImage from '../../assets/images/work/PORTFOLIO.png';
import SkillColors from '../components/SkillColors';
import Header from '../components/Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const workItems = [
    {
        title: 'CWE Booster - Smart Crypto Trading Made Easy',
        description: 'I build CWBooster, a dynamic crypto trading platform that’s as smart as it is sleek. Powered by the MERN stack and polished with SCSS, it offers real-time market insights, a secure wallet, and an intuitive dashboard for effortless trading. With AI-driven features and seamless Git-powered deployment, CWBooster empowers thousands to trade smarter and earn rewards effortlessly. Fast, secure, and packed with everything needed to unlock trading potential—CWBooster has it all!',
        skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'MongoDB', 'API Integration', 'CSS', 'SCSS', 'Figma', 'GitLab', 'GitHub', 'VS Code', 'Postman'],
        image: CweImage.src,
        githubLink: 'https://github.com/shaniaakhan21/cwe',
        websiteLink: 'https://www.cwebooster.com',
    },
    {
        title: 'Snap Partners - Empowering Financial Success',
        description: 'I contributed to Snap Partners, a dynamic platform built on the MERN stack and Tailwind CSS. My role involved developing APIs and redesigning the UI/UX, enhancing the user experience across the comprehensive dashboard. Key features include a 1099 tax report generator and 1099 Tax Identification Number validation to ensure compliance with US tax laws. Snap Partners is dedicated to maximizing earnings potential while building teams and disrupting industries—your gateway to financial empowerment!',
        skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'API Integration', 'Figma', 'GitLab', 'GitHub', 'VS Code', 'Postman'],
        image: SnapImage.src,
        githubLink: 'https://github.com/shaniaakhan21/snap-partners',
        websiteLink: 'https://www.snappartners.com/',
    },
    {
        title: 'Premier Rx - Your Prescription Benefit Game Changer',
        description: 'As a developer on this project, I leveraged the MERN stack and Tailwind CSS to craft a dynamic dashboard with tiered access levels. This innovative solution redefines the PBM landscape by offering a membership-based program that prioritizes transparency and cost savings. With over 1,000 generic drugs delivered at no cost, free antibiotics, robust PBM services, a national rebate aggregator, and telemedicine access—all seamlessly integrated—I ensured that we made healthcare accessible and efficient.',
        skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'API Integration', 'Figma', 'GitLab', 'GitHub', 'VS Code', 'Postman'],
        image: Premierx4freeImage.src,
        githubLink: 'https://github.com/shaniaakhan21/premierx4free',
        websiteLink: 'https://www.premierx4free.com/',
    },
    {
        title: 'Emays - The Luxury Try-Before-You-Buy Experience',
        description: 'As a developer on the Emays platform, I leveraged the MERN stack and Tailwind CSS to create a seamless try-at-home experience for luxury clothing. The platform features a delivery dashboard and retailer interface for real-time order tracking, all hosted on AWS with Docker for scalable deployment. Integrating Stripe for secure payments and automating emails for smooth communication, I transformed how customers shop—no upfront costs, hassle-free returns, and a commitment to sustainability. Who said luxury can’t be effortless?',
        skills:  ['React.js', 'JavaScript' , 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'API Integration', 'GitLab', 'GitHub', 'VS Code', 'Postman', 'AWS', 'Docker'],
        image: EmaysImage.src,
        githubLink: 'https://github.com/shaniaakhan21/emays-website',
        websiteLink: 'https://emaysconcierge.com/',
    },
    {
        title: 'Numbers Game - Where Freedom Meets Fun',
        description: 'As a frontend developer for Numbers Games, I harnessed the power of the MERN stack and Tailwind CSS to create an engaging gaming platform under the Kahnawake Gaming License. The website, playnumbersgame.com, showcases a vibrant and user-friendly interface, ensuring an immersive experience for players. My work focused on crafting responsive designs and optimizing performance, making gaming accessible and enjoyable for everyone. With a dynamic approach to user interaction, I helped bring the thrill of Numbers Games to life!',
        skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'MongoDB', 'API Integration', 'CSS', 'SCSS', 'Figma', 'GitLab', 'GitHub', 'VS Code', 'Postman'],
        image: NGImage.src,
        githubLink: 'https://github.com/shaniaakhan21/numbers-game',
        websiteLink: 'https://www.cwebooster.com',
    },
    {
        title: 'Shaniya.pro - Your Gateway to My Professional World',
        description: 'Crafted with React, Next.js, Tailwind CSS, and powered by a Django backend, shaniya.pro is more than just a portfolio—it is an interactive space where recruiters and professionals can get to know me better. Inspired by the clean, classy design of LinkedIn, it features an elegant post feed and all the essential details about my work, skills, and experiences. Whether you are here to browse or connect, this sleek, responsive platform makes it easy to explore my journey. Welcome to the future of personal branding!',
        skills: ['React.js', 'Next.js', 'Django', 'TypeScript', 'SQL', 'API Integration', 'TailwindCSS', 'Figma', 'GitLab', 'GitHub', 'VS Code', 'Postman'],
        image: PortfolioImage.src,
        githubLink: 'https://github.com/shaniaakhan21/shaniya',
        websiteLink: 'https://www.shaniya.pro',
    }
];

const Projects: React.FC = () => {
    return (
        <><Header />
            <Container maxWidth="lg" className="bg-[#F7F7F7]">
                <Typography variant="h2" className="text-center text-xl p-0 sm:text-3xl font-bold my-4 sm:my-8">
                    Projects
                </Typography>

                <div className="flex flex-wrap -mx-4 border-r border-b border-black mb-4 ">
                    {workItems.map((item, index) => (
                        <div key={index} className="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 p-4 border-t border-l border-black">
                            <Card className="relative rounded-none filter-none drop-shadow-none shadow-none">
                                <div className="relative overflow-hidden">
                                    {/* Image */}
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.image}
                                        alt={item.title}
                                        className="object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 border border-black" />
                                    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#c08] hover-icons"
                                        >
                                            <GitHubIcon />
                                        </a>
                                        <a
                                            href={item.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#c08] hover-icons"
                                        >
                                            <LaunchIcon />
                                        </a>
                                    </div>
                                </div>
                                <CardContent className='bg-[#F7F7F7] py-2 px-1 flex flex-col justify-between'>
                                    <Typography variant="h5" className="font-bold text-start">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" className="my-2 text-gray-600 text-justify">
                                        {item.description}
                                    </Typography>
                                    <div className="flex flex-wrap gap-2 justify-start">
                                        {item.skills.map((skill, idx) => (
                                            <SkillColors key={idx} skill={skill} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container></>
    );
};

export default Projects;
