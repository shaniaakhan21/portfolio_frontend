/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import ProfilePic1 from '../../assets/images/profilepic.png';
import PushPinIcon from '@mui/icons-material/PushPin';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LaptopIcon from '@mui/icons-material/Laptop';
import CreateIcon from '@mui/icons-material/Create';
import Education from './Education';
import Work from './Work';
import RightSidebar from './RightSidebar';
import Blogs from '../blogs/page';
import axios from 'axios';
import { format } from 'date-fns';

interface Posts {
    title: string;
    content: string;
    author: string;
    profilePic?: string;
    mood: string;
    image?: string;
    date: Date;
    pinned?: boolean;
    company_name?: string;
}

const PostFeed: React.FC<{ company_name?: string; posts: Posts[] }> = ({ company_name, posts: externalPosts }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [posts, setPosts] = useState<Posts[]>(externalPosts || []);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = `${backendUrl}/api/posts/`;
                const response = await axios.get<Posts[]>(url);
    
                // Convert date strings to Date objects
                const postsWithDates = response.data.map(post => {
                    return {
                        ...post,
                        date: new Date(), // Default to now if invalid
                    };
                });
    
                // Filter out posts with company_name
                const filteredPosts = postsWithDates.filter(post => !post.company_name);
    
                // Sort the posts
                const sortedPosts = filteredPosts.sort((a, b) => {
                    // First sort by pinned status
                    if (a.pinned && !b.pinned) return -1;
                    if (!a.pinned && b.pinned) return 1;
                    // Then sort by date (latest first)
                    return b.date.getTime() - a.date.getTime();
                });
    
                // Set the sorted posts to state
                setPosts(sortedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        // Fetch posts only if externalPosts is not available
        if (!externalPosts) {
            fetchPosts();
        }
    }, []); 

    // Example post data with author, date, title, content, image, and mood
    // const posts = [
    //     {
    //         author: 'Shaniya Khan',
    //         date: '2023-12-25',
    //         title: 'Brewing Code & Breaking Barriers',
    //         content: `Hey there! Welcome to my little corner of the internet. <br />
    //         Sure, you can check out my resume to see my qualifications, but here’s the real scoop you won’t find there: I'm all about that sweet "me-time" with a strong cup of coffee in hand.<br />
    //         I love exploring new cafes (because, hey, coffee tastes better when you’re sitting in a cozy new spot) and creating things, whether it’s code or concepts.<br />
    //         Now, by day, I’m the proud COO of Go Girl Organization, where we’re on a mission to bridge the gender gap in IT.<br />
    //         It’s incredibly fulfilling to help hundreds of girls dive into the world of tech, teaching them the skills that will launch their careers.<br />
    //         Watching them grow? That’s the good stuff.<br />
    //         Oh, and when it comes to tech, I’m a bit of a shapeshifter – I seamlessly switch between technologies based on the needs of the project and the team.<br />
    //         Some might say I’ve got a knack for it (okay, maybe I’ll say it too). From coding marathons to exploring the latest tech trends, I live and breathe development. It’s my thing.<br />
    //         So, stick around and explore – who knows, maybe we’ll grab a virtual coffee sometime!`,
    //         image: CoffeeImg,
    //         mood: 'Feeling fresh 😊',
    //         profilePic: ProfilePic1,
    //         pinned: true,
    //     },

    //     {
    //         author: 'Jane Smith',
    //         date: '2024-01-15',
    //         title: 'A Bread-Lover’s Journey',
    //         content: `Bread is my love language! 🍞 Whether it’s a warm, fluffy pretzel or a crusty sourdough, I adore it in every shape and form.<br />
    //         Each bite brings me joy, and I can’t resist trying new varieties. You might find me at a local bakery, excitedly sampling whatever delicious creation they have on offer.<br />
    //         Recently, I’ve also ventured into the world of technical blogging, sharing my insights and experiences in tech. Writing has become another passion of mine, allowing me to connect with others and share knowledge.<br />
    //         And on those creative days, I love to paint! It’s a therapeutic escape, where I can express myself in colors and brushstrokes. Join me in my journey of flavors, words, and art!`,
    //         image: PretzelImg,
    //         mood: 'Embracing creativity and flavors 🎨🥨',
    //         profilePic: ProfilePic1,
    //         pinned: false,
    //     },
    // ];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Box className="w-full mt-2 sm:mt-0 mb-2">
            {/* Tab Navigation */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                className="p-2"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& .MuiTabs-indicator': { backgroundColor: '#cc0088', height: '5px' },
                }}
            >
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<CelebrationIcon className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Feed"
                    className='font-size-16-9 min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<SchoolIcon className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Education"
                    className='font-size-16-9 min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<LaptopIcon className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Work"
                    className='font-size-16-9 min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<CreateIcon className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Technical Blogs"
                    className='font-size-16-9 min-h-fit min-w-fit'
                />
            </Tabs>

            {/* Tab Panel */}
            <div className="sm:mt-2">
                {activeTab === 0 && (
                    <div className="post-feed">
                        {posts.map((post) => (
                            <div key={post.title} className="post mb-4 px-4 sm:px-8 pt-4 pb-8 rounded-xl hover:bg-[#dee2e645]">
                                {post.pinned && !company_name && (
                                    <div className="text-gray-600 text-xs">
                                        <PushPinIcon className='my-1' />
                                        <span className="ml-1">Pinned</span>
                                    </div>
                                )}
                                <div className="flex items-center mb-2">
                                    <Image
                                        src={ProfilePic1}
                                        alt={post.author}
                                        width={60}
                                        height={60}
                                        className="rounded-full h-[60px]"
                                    />
                                    <div className="ml-3">
                                        <p className="font-semibold text-lg">{post.author}</p>
                                        <p className="text-gray-400 text-sm">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
                                    </div>
                                </div>

                                {/* Mood section */}
                                <div className="bg-[#dee2e6] px-3 py-1 rounded-full inline-block text-sm text-gray-700 mb-2">
                                    {post.mood}
                                </div>

                                {/* Post title and content */}
                                <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                                <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />

                                {/* Post image */}
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        className="rounded-xl mt-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Placeholder for other tabs */}
                {activeTab === 1 && <><Education /></>}
                {activeTab === 2 && <><Work /></>}
                {activeTab === 3 && <><Blogs /></>}
            </div>
            <div className='hidden md:relative md:block lg:hidden'>
                <RightSidebar />
            </div>
        </Box>
    );
};

export default PostFeed;
