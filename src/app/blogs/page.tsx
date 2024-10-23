"use client";
import React from 'react';
import BasicInfo from '../components/Basicinfo';
import BlogCard from '../components/BlogCard';
import Blog1 from '../../assets/images/blogs/reactXdjango.png';

const Blogs: React.FC = () => {

    return (
        <>
            <BasicInfo className="hidden"/>
            <h1 className='text-2xl font-semibold mt-6'>Tech Tidbits and Tales!</h1>
            <h1 className='text-start mt-2'>Step-by-step tutorials for aspiring techies—let&#39;s decode together!</h1>
            <div className='grid grid-cols-1 gap-6 mt-4'>
                <BlogCard
                    imageSrc={Blog1}
                    title={
                        <>
                            Basic Django and React Setup:<br />
                            A Step-by-Step Guide
                        </>
                    }
                    link="https://dev.to/shaniya_khan_8d7f203b1ad2/basic-django-and-react-setup-a-step-by-step-guide-1819"
                />
            </div>
        </>
    );
};

export default Blogs;
