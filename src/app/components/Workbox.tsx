"use client";
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider, useTheme } from '../../context/ThemeProvider'; // Adjust the import path as necessary


// Define a styled component for the timeline item
const TimelineItem = styled('div')(() => {
    const { theme: currentTheme } = useTheme();
    const colorMap = {
        light: '#e0e0e0',  // Grey 300 for light theme
        dark: '#b0b0b0',   // Grey 300 for dark theme
        pink: '#f0f0f0',   // Grey 300 for pink theme
    };

    return {
        position: 'relative',
        borderBottom: `1px solid ${colorMap[currentTheme]}`,
    };
});

const WorkExperience: React.FC = () => {
    const experiences = [
        {
            company: 'Dyrani Software Services, L.L.C',
            location: 'Dubai, U.A.E',
            role: 'Software Developer',
            period: 'Feb 2023 – Present',
        },
        {
            company: 'Musclestadt Sporternaehrung, India Private Limited',
            location: 'Amritsar, India',
            role: 'Full Stack Web and App Developer',
            period: 'Nov 2021 – Dec 2022',
        },
        {
            company: 'MyDiela, FZE L.L.C',
            location: 'Remote Job',
            role: 'Software Developer (Contract)',
            period: 'Sept 2021 – Nov 2021',
        }
    ];

    return (
        <ThemeProvider>
            <Box>
                <h2 className='text-lg font-bold mb-2'>Work Experience</h2>
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} className='py-2'>
                        <h6 className='text-sm font-bold'>
                            {exp.role}
                        </h6>
                        <p color="textSecondary" className='text-xs font-semibold'>
                            {exp.company}
                        </p>
                        <div className='flex flex-row justify-between pt-1'>
                            <h6
                                className='text-xs'
                                style={{ color: exp.period.includes('Present') ? '#0a66c2' : '#cb112d' }}
                            >
                                {exp.period}
                            </h6>
                            <h6 className='text-xs'>
                                {exp.location}
                            </h6>
                        </div>
                    </TimelineItem>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default WorkExperience;
