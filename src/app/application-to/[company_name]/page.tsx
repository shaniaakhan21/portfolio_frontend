// app/application-to/[company_name]/page.tsx
import React from 'react';
import PostFeed from '../../components/Postfeed'; // Adjust the import based on your structure
import axios from 'axios';

const CompanyPostsPage: React.FC<{ params: { company_name: string } }> = async ({ params }) => {
    const { company_name } = params;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
        // Fetch posts for the specific company
        const response = await axios.get(`${backendUrl}/application-to-${company_name}/`);
        const posts = response.data;
        console.log("Fetched Posts for company:", posts);

        return (
            <div>
                <h1>Posts for {company_name}</h1>
                <PostFeed company_name={company_name} posts={posts} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching posts:", error); // Log any fetch errors
        return <div>Error loading posts</div>;
    }
};


export default CompanyPostsPage;
