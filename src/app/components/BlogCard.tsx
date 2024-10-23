// BlogCard.tsx
"use client";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  imageSrc: StaticImageData;
  title: React.ReactNode;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, link }) => {
  return (
    <div className="border rounded-xl bg-white overflow-hidden shadow-md">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image src={imageSrc} alt='Tech Blogs' className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link href={link}  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline hover:text-[#cc0088] text-end">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
