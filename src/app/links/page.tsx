"use client";
import React from 'react';
import BasicInfo from '../components/Basicinfo';
import CustomLink from '../components/CustomLink';

const Links: React.FC = () => {


    return (
        <>
            <BasicInfo className="hidden sm:block" />
            <div className='px-1'>
                <h1 className='text-2xl font-semibold mt-6'>Let&#39;s connect!</h1>
                <h1 className='text-start mt-2'>Need a link to find me? It&#39;s easier than finding Waldo!</h1>
                <div className='mt-4 flex flex-wrap justify-start gap-2 mb-4 sm:mb-0'>
                    <CustomLink href="https://shaniya.pro">Website</CustomLink>
                    <CustomLink href="https://github.com/shaniaakhan21">GitHub</CustomLink>
                    <CustomLink href="https://www.linkedin.com/in/codewithshaniya/">LinkedIn</CustomLink>
                    <CustomLink href="https://calendly.com/shaniyakhan/meeting-with-shaniya">Calendly</CustomLink>
                    <CustomLink href="https://www.gogirlorganisation.com/team">Go Girl</CustomLink>
                    <CustomLink href="/assets/pdfs/Shaniya_Khan_resume.pdf" >Résumé</CustomLink>
                    <CustomLink href="https://dev.to/shaniya_khan_8d7f203b1ad2/basic-django-and-react-setup-a-step-by-step-guide-1819">Blogs</CustomLink>
                    <CustomLink href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@shaniya.pro">Email</CustomLink>
                </div>
            </div>
        </>
    );
};

export default Links;
