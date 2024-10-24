// app/application-to/[company_name]/page.tsx
import React from 'react';
import PostFeed from '../../components/Postfeed'; // Adjust the import based on your structure
import axios from 'axios';
import BasicInfo from '@/app/components/Basicinfo';

const CompanyPostsPage: React.FC<{ params: { company_name: string } }> = async ({ params }) => {
    const { company_name } = params;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const normalizedCompanyName = company_name.toLowerCase();
    try {
        // Fetch posts for the specific company
        const response = await axios.get(`${backendUrl}/application-to-${normalizedCompanyName}/`);
        const posts = response.data;

        console.log("Fetched Posts for company:", posts);
        console.log("company:", normalizedCompanyName);

        return (
            <div>
                <BasicInfo className="hidden sm:block" />
                <PostFeed company_name={normalizedCompanyName} posts={posts} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching posts:", error); 
        return <div>Error loading posts</div>;
    }
};


export default CompanyPostsPage;
