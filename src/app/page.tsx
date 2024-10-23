"use client"; // Add this line to treat this component as a client component

// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { ThemeProvider } from '../context/ThemeProvider'
import BasicInfo from './components/Basicinfo';
import PostFeed from './components/Postfeed';

// // Define interface for the API response
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   link: string;
//   image?: string;
// }

export default function Home() {
  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   axios.get<Project[]>('http://localhost:8000/projects/')
  //     .then((response) => {
  //       setProjects(response.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <ThemeProvider>
      <BasicInfo className="hidden sm:block"/>
      <PostFeed/>
    </ThemeProvider>
  );
}
