import React from 'react';
import Link from 'next/link';
import './links.css'

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className='link-btn flex flex-row items-center text-black bg-[#dfdfdfc9] w-fit py-2 px-4 rounded-lg'
            target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    );
};

export default CustomLink;
