// SkillColors.tsx
import React from 'react';

// Define a type for the props
interface SkillColorsProps {
  skill: string;
}

// Define the skill colors component
const SkillColors: React.FC<SkillColorsProps> = ({ skill }) => {
  // Define the style map for each skill
  const skillStyles: { [key: string]: string } = {
    'React.js': 'bg-[#5ed3f338] text-[#5ED3F3] border-[#5ED3F3]',
    'Node.js': 'bg-[#68b94538] text-[#313131] border-[#68B945]',
    'Stripe': 'bg-[#646ede38] text-[#646EDE] border-[#646EDE]',
    'Docker': 'bg-[#008ddf38] text-[#008DDF] border-[#008DDF]',
    'REST APIs': 'bg-[#cc008838] text-[#CC0088] border-[#CC0088]',
    'TypeScript': 'bg-[#0376c638] text-[#0376C6] border-[#0376C6]',
    'MySQL': 'bg-[#dd8a0038] text-[#DD8A00] border-[#DD8A00]',
    'AWS': 'bg-[#f78b0438] text-[192A3A] border-[#F78B04]',
    'GraphQL': 'bg-[#ea59ba38] text-[#EA59BA] border-[#EA59BA]',
    'API Integration': 'bg-[#f7754d38] text-[#F7754D] border-[#F7754D]',
    'PostgreSQL': 'bg-[#31648c38] text-[#31648C] border-[#31648C]',
    'HTML': 'bg-[#dd4b2538] text-[#DD4B25] border-[#DD4B25]',
    'CSS': 'bg-[#254bdd38] text-[#254BDD] border-[#254BDD]',
    'TailwindCSS': 'bg-[#36b7f038] text-[#36B7F0] border-[#36B7F0]',
    'JavaScript': 'bg-[#efd81d38] text-[#453420] border-[#EFD81D]',
    'Next.js': 'bg-[#00000038] text-black border-black',
    'MongoDB': 'bg-[#4da53f38] text-[#4DA53F] border-[#4DA53F]',
    'Django': 'bg-[#092d1f38] text-[#092D1F] border-[#092D1F]',
    'Python': 'bg-[#f7cc4038] text-[#376E9D] border-[#F7CC40]',
    'Adobe Illustrator': 'bg-[#f7950038] text-[#310000] border-[#F79500]',
    'Adobe Photoshop': 'bg-[#2fa3f738] text-[#001D34] border-[#2FA3F7]',
    'Adobe XD': 'bg-[#F75EEE38] text-[#450135] border-[#F75EEE]',
    'Figma': 'bg-[#19B6F538] text-[#EB4C1D] border-[#9D56F7]',
    'Canva': 'bg-[#02BCC738] text-[#7228E6] border-[#17A0C9]',
    'Flutter': 'bg-[#5CC3F038] text-[#005195] border-[#5CC3F0]',
    'GitLab': 'bg-[#F49E2538] text-[#DB4128] border-[#F46A25]',
    'GitHub': 'bg-[#00000038] text-black border-black',
    'Nginx': 'bg-[#0E924638] text-[#0E9246] border-[#0E9246]',
    'Heroku': 'bg-[#541FAC38] text-[#541FAC] border-[#541FAC]',
    'VS Code': 'bg-[#24AAED38] text-[#0174B4] border-[#24AAED]',
    'Postman': 'bg-[#F7693638] text-[#F76936] border-[#F76936]',
    'Wordpress': 'bg-[#20719638] text-[#207196] border-[#207196]',
  };

  // Default style if skill not explicitly defined
  const style = skillStyles[skill] || 'bg-[#cc00881f] text-[#c08] border-[#c08]';

  return (
    <span className={`text-[8px] sm:text-xs font-medium px-1 py-[2px] sm:px-2 sm:py-1 border rounded-full ${style}`}>
      {skill}
    </span>
  );
};

export default SkillColors;
