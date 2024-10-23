"use client";
import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { ThemeProvider } from '../../context/ThemeProvider'; // Adjust the import path as necessary
import SkillColors from './SkillColors';



const Work: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'All' | 'Professional' | 'Volunteer' | 'Internships'>('All');
    const workExperiences = [
        {
            company: 'Dyrani Software Services, L.L.C',
            location: 'Dubai, U.A.E',
            role: 'Software Developer',
            period: 'Feb 2023 – Present',
            description: [
                'In my current role as a <b>Software Developer</b>, I have successfully led multiple projects, contributing to both full stack development and user experience enhancements.',
                '<b>Project Leadership: </b> Spearheaded the front-end development for over <b>80%</b> of key projects, including <b>CWE Booster, Snap Partners, AISD Servers, Play Numbers Game, Emays,</b> and <b>PremierX4Free</b>. This leadership role has significantly enhanced user interaction and functionality, resulting in a <b>30%</b> increase in user engagement across platforms.',
                '<b>UI/UX Redesign:</b> Executed a comprehensive redesign of the Snap Partners platform, implementing features such as <b>1099 Tax Identification Number</b> validation to ensure compliance with U.S. tax regulations. This redesign not only improved the platform’s reliability but also boosted user trust, reflected in a <b>25%</b> increase in user satisfaction scores.',
                '<b>Software Development & Database Management:</b> Developed and maintained both the front-end and admin interfaces for the <b>PremierX4Free</b> website, focusing on secure data storage and efficient database management. This effort ensured a seamless user experience, contributing to a <b>40%</b> reduction in customer support queries related to technical issues.',
                '<b>Cryptocurrency Innovation:</b> Contributed to the <b>Cwebooster</b> project, specializing in cryptocurrency technologies. My involvement in developing features that enhance user engagement and functionality led to a <b>50%</b> increase in user sign-ups and transaction volumes.',
                '<b>Node Hosting Solutions:</b> Led the <b>AISD Servers</b> initiative, enabling users to rent nodes for hosting. By optimizing the service to cater to diverse customer needs, we achieved a 35% improvement in performance metrics, ensuring high reliability and customer satisfaction.'
            ],
            skills: ['CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Next.js', 'REST APIs', 'API Integration',
                'GraphQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'GitLab', 'GitHub', 'AWS', 'Stripe', 'Docker', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code', 'Postman']
        },
        {
            company: 'Musclestadt Sporternaehrung, India Pvt Ltd',
            location: 'Amritsar, India',
            role: 'Full Stack Developer',
            period: 'Nov 2021 – Dec 2022',
            description: [
                'Developed fully responsive and <b>GDPR-compliant</b> websites for multiple company brands including <b>Musclestadt, Myogenetix, Ergogenic</b> and <b>Pure powders</b> encompassing both front-end and back-end development for optimal user experience.',
                'Designed and implemented a mobile app for <b>ProteinBot,</b> streamlining user access to product information and enhancing customer engagement',
                'Orchestrated successful digital marketing initiatives, including <b>A/B testing</b> on meta platforms and strategic ad campaigns, resulting in a <b>17%</b> increase in website-generated orders and reaching over <b>1 million potential customers.</b>'
            ],
            skills: ['Wordpress', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Flutter', 'Nginix', 'MongoDB', 'PostgreSQL', 'GitLab', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code', 'Postman']
        },
        {
            company: 'MyDiela, FZE L.L.C',
            location: 'Remote Job (Contract)',
            role: 'Software Developer',
            period: 'Sept 2021 – Nov 2021',
            description: [
                'Developed a <b>school management</b> software using <b>Django</b> and <b>Django-baton</b>, serving over <b>1,000</b> users with <b>2,000</b> daily transactions.',
                'Consistently delivered tasks ahead of schedule, completing over 50 tasks with a <b>95%</b> on-timedelivery rate..',
                'Integrated <b>third-party APIs</b> for enhanced Software functionality.'
            ],
            skills: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React.js', 'Django', 'django-baton', 'Python', 'PostgreSQL', 'GitLab', 'GitHub', 'Canva', 'VS Code', 'Postman']
        },
        {
            company: 'Cue Learn Pvt. Ltd. ( CUEMATH )',
            location: 'Remote Job',
            role: 'Coding Instructor (Part-time)',
            period: 'May 2021 – Oct 2021',
            description: [
                'Instructed <b>Python and JavaScript</b> to students spanning Grade 1 to Grade 12, fostering a passion for coding across diverse age groups',
                'Presented captivating demonstration classes, effectively inspiring students to delve into the world of coding.',
                'Delivered instruction domestically and abroad, catering to both national and international audiences, ensuring accessibility to coding education on a global scale.'
            ],
            skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'VS Code', 'Tutoring']
        }

    ];

    const volunteerExperiences = [
        {
            company: 'Go Girl Humanitarian Foundation, India',
            location: 'Remote',
            role: 'Chief Operating Officer',
            period: 'Aug 2022 – Present',
            description: [
                'Cultivated strategic <b>partnerships with NGOs</b> to broaden the organizations outreach and effectiveness, enhancing collaborative efforts in pursuit of common goals.',
                'Orchestrated both online and offline workshops, ensuring seamless <b>coordination among department heads, training managers, and tutors</b> through consistent communication.',
                'Spearheaded the development and deployment of an inclusive and accessible curriculum, aligning with the organization&#39;s mission to provide equitable education opportunities.',
                'Demonstrated leadership acumen by chairing meetings, fostering a <b>cohesive team environment</b>, and leveraging <b>strong teamwork and leadership skills</b> to drive productivity and collaboration'
            ],
            skills: ['Team Lead', 'Interviewing', 'Organising Workshops', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },

        {
            company: 'The Girl Code, India',
            location: 'Remote',
            role: 'Chief Operating Officer',
            period: 'Feb 2022 – July 2022',
            description: [
                'Achieved promotion to Chief Operating Officer <b>within a year</b>, credited for outstanding performance and innovative collaboration with Yashoda Foundation, demonstrating proactive and out-of-the-box thinking.',
                'Strategically expanded the organization’s initiatives by fostering relationships with various educational institutions, significantly enhancing program visibility and participant engagement by <b>30%</b>.',
                'Implemented data-driven strategies to assess program effectiveness, leading to actionable insights that improved workshop satisfaction rates by <b>40%</b> and overall impact on participants.',
                'Oversaw the development and refinement of training materials, ensuring alignment with current industry trends and educational standards, thereby enriching the learning experience for all participants.',
                'Cultivated a strong organizational culture by promoting diversity and inclusion, ensuring that all voices were heard and valued within the organization, enhancing team morale and collaboration.',
                'Established a robust feedback mechanism that enabled continuous improvement of programs, empowering tutors and participants to contribute to the evolving curriculum and approach.'
            ],
            skills: ['Team Lead', 'Organising Workshops', 'Interviewing', 'Strategic Partnerships', 'Data Analysis', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },

        {
            company: 'The Girl Code, India',
            location: 'Remote',
            role: 'Chapter Manager',
            period: 'July 2021 – Jan 2022',
            description: [
                'Effectively managed and coordinated chapters across multiple states in India and international locations, ensuring consistent implementation of organizational standards and community engagement initiatives.',
                'Supervised the execution of workshops and events, fostering collaboration among department heads, training managers, and tutors to achieve optimal learning outcomes and a <b>25% increase</b> in participant attendance.',
                'Developed and maintained strong relationships with local communities and educational institutions, leading community outreach programs that positively impacted over <b>1,000</b> young women and girls through skill-building initiatives.',
                'Led a dynamic team of curriculum developers and volunteers, promoting a culture of teamwork and innovation that enhanced program delivery and responsiveness to community needs.',
                'Implemented regular feedback loops to assess program effectiveness, ensuring that content remained relevant and engaging, resulting in improved participant satisfaction scores.'
            ],
            skills: ['Chapter Management', 'Community Engagement', 'Workshop Coordination', 'Team Leadership', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },
    ];

    const internships = [
        {
            company: 'Clever Programmer',
            location: 'Remote',
            role: 'Django Developer',
            period: 'Oct 2020 - Jul 2021',
            description: [
                'Spearheaded the development of a dynamic <b>movie app</b> using <b>Django, GitHub, Git, Heroku, Python, HTML,</b> and <b>CSS</b>, integrating robust <b>CRUD functionality</b> to allow seamless adding, updating, and deleting of movies, significantly enhancing user experience.',
                'Designed and launched a personal <b>portfolio website</b> showcasing advanced proficiency in <b>HTML, CSS, JavaScript, Bootstrap, Django-Baton,</b> and <b>SendGrid</b>, providing an optimized platform for client interaction and professional growth.',
                'Successfully replicated <b>cleverprogrammer.com</b> to refine front-end skills, utilizing modern technologies such as <b>HTML, CSS, JavaScript,</b> and <b>Django</b>, demonstrating strong adaptability and eagerness to innovate.'
            ],
            skills: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Django-Baton', 'Git', 'GitHub', 'Heroku', 'SendGrid', 'Bootstrap', 'CRUD Operations', 'API Integration']
        },
        {
            company: 'Omion Fusion Technologies Private Limited',
            location: 'Remote',
            role: 'Web Developer & Trainer',
            period: 'May 2020 - Jul 2020',
            description: [
                'Led the development and maintenance of a high-availability <b>website</b> (99.9% uptime) using <b>HTML, CSS, JavaScript, WordPress, Python,</b> and <b>Django</b>, ensuring flawless performance and timely deployments.',
                'Conducted online classes and provided hands-on <b>Python programming</b> instruction to students, successfully teaching and guiding them to complete impactful minor projects, fostering early programming skills.',
                'Administered engaging <b>quizzes, assignments,</b> and tests weekly, complemented by detailed <b>PowerPoint presentations</b>, ensuring effective knowledge transfer and enhancing student participation.',
                'Promoted to <b>Trainer’s Coach</b> within a month due to exceptional teaching performance, mentoring other trainers on <b>curriculum development, time management,</b> and effective teaching methodologies, significantly improving overall team efficiency.'
            ],
            skills: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Web Development', 'Training', 'Curriculum Development', 'Online Teaching', 'Project Management', 'Mentorship', 'Time Management']
        },
    ];

    interface ExperienceItem {
        company: string;
        location: string;
        role: string;
        period: string;
        description: string[];
        skills: string[];
    }

    const Section = ({ items, sectionStyles }: { items: ExperienceItem[], sectionStyles: string }) => (
        <Box className={sectionStyles}>
            {items.map((item, index) => (
                <div key={index} className='mb-2'>
                    <div className="flex flex-row justify-between items-center">
                        <h6 className="text-sm  md:text-xl lg:text-2xl  font-bold text-black">
                            {item.role}
                        </h6>
                        <div className='text-xs sm:text-sm' style={{ color: item.period.includes('Present') ? '#0a66c2' : '#cb112d' }}>
                            {item.period}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-semibold text-xs md:text-base lg:text-lg">
                            {item.company}
                        </p>
                        <p className='text-xs sm:text-sm'>{item.location}</p>
                    </div>
                    <Box className="mt-2">
                        <p className="text-xs sm:text-base font-bold text-black">Responsibilities:</p>
                        <List dense>
                            {item.description.map((desc, idx) => (
                                <ListItem key={idx} disablePadding>
                                    <ListItemText
                                        primary={<span dangerouslySetInnerHTML={{ __html: desc }} />}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box className="mt-2">
                        <p className="font-semibold mb-2">Technologies & Tools:</p>
                        <Box className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                                <SkillColors key={idx} skill={skill} />
                            ))}
                        </Box>
                    </Box>
                    <div className='bb'></div>
                </div>
            ))}
        </Box>
    )

    return (
        <ThemeProvider>
            <div className='flex justify-between items-center py-2 mb-2'>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'All' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('All')}>All</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Professional' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Professional')}>Professional</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Volunteer' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Volunteer')}>Volunteer</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Internships' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Internships')}>Internships</button>
            </div>

            {(activeSection === 'All' || activeSection === 'Professional') && (
                <Section items={workExperiences} sectionStyles="bg-white rounded-xl p-4 mb-2" />
            )}
            {(activeSection === 'All' || activeSection === 'Volunteer') && (
                <Section items={volunteerExperiences} sectionStyles="bg-[#cc008808] rounded-xl p-4 mt-2 mb-2" />
            )}
            {(activeSection === 'All' || activeSection === 'Internships') && (
                <Section items={internships} sectionStyles="bg-[#55aaff17] rounded-xl p-4 mt-2 sm:mb-0 mb-2" />
            )}
        </ThemeProvider>
    );
};

export default Work;
