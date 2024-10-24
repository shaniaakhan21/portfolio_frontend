// app/application-to/[company_name]/page.tsx
import React from 'react';
import PostFeed from '../../components/Postfeed'; // Adjust the import based on your structure
import axios from 'axios';
import BasicInfo from '@/app/components/Basicinfo';
import { Posts } from '../../components/Postfeed';

const CompanyPostsPage: React.FC<{ params: { company_name: string } }> = async ({ params }) => {
    const { company_name } = params;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const normalizedCompanyName = company_name.toLowerCase();
    try {
        const companyResponse = await axios.get<Posts[]>(`${backendUrl}/application-to-${normalizedCompanyName}/`);
        const companyPosts = companyResponse.data;

        // Fetch all other posts
        const allPostsResponse = await axios.get<Posts[]>(`${backendUrl}/api/posts/`);
        const allPosts = allPostsResponse.data;

        // Filter out company posts from all posts to avoid duplication
        const filteredPosts = allPosts.filter((post: Posts) => !post.company_name); // Provide type here

        // Combine company posts with the filtered all posts
        const combinedPosts = [...companyPosts, ...filteredPosts];

        return (
            <div>
                <BasicInfo className="hidden sm:block" />
                <PostFeed company_name={normalizedCompanyName} posts={combinedPosts} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching posts:", error); 
        return <div>Error loading posts</div>;
    }
};


export default CompanyPostsPage;
