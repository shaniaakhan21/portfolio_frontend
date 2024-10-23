"use client";
import React from 'react';
import BasicInfo from '../components/Basicinfo';
import CustomLink from '../components/CustomLink';

const Links: React.FC = () => {


    return (
        <>
            <BasicInfo className="hidden sm:block" />
            <h1 className='text-2xl font-semibold mt-6'>Let&#39;s connect!</h1>
            <h1 className='text-start mt-2'>Need a link to find me? It&#39;s easier than finding Waldo!</h1>
            <div className='mt-4 flex flex-wrap gap-2 mb-4 sm:mb-0'>
                <CustomLink href="https://shaniya.pro/">Website</CustomLink>
                <CustomLink href="https://github.com/shaniya">GitHub</CustomLink>
                <CustomLink href="https://linkedin.com/in/shaniya">LinkedIn</CustomLink>
                <CustomLink href="https://shaniya.pro/">Calendly</CustomLink>
                <CustomLink href="https://github.com/shaniya">Go Girl</CustomLink>
                <CustomLink href="https://linkedin.com/in/shaniya">Résumé</CustomLink>
                <CustomLink href="https://linkedin.com/in/shaniya">Blogs</CustomLink>
                <CustomLink href="https://linkedin.com/in/shaniya">Email</CustomLink>
            </div>
        </>
    );
};

export default Links;
