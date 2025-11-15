import { ROUTES } from '@/shared/constants';

export type ProjectItem = {
  id: number;
  role: string;
  title: string;
  stack: string[];
  isPrivate: boolean;
  url: string | null;
  description: string;
};

export const PROJECTS_DATA: {
  title: string;
  footer: string;
  description: string;
  items: ProjectItem[];
  footerActionLabel: string;
  footerActionURL: (typeof ROUTES)[keyof typeof ROUTES];
} = {
  title: 'Projects',
  footerActionURL: ROUTES.CONTACT_ME,
  footerActionLabel: 'Help Me To Find You ( Contact me )',
  description: 'Some experiences happened<br />Outside the companies',
  footer: 'We can create an idea and develop the future for everyone',
  items: [
    {
      id: 1,
      title: 'Laravel Admin Panel',
      url: 'https://github.com/Ambartiwari2001/laravel-admin-panel',
      role: 'Full Stack Developer',
      stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      isPrivate: false,
      description:
        'A complete admin panel built with Laravel, allowing management of users, roles, and system settings. Focused on security, scalability, and efficient backend design.'
    },
    {
      id: 2,
      title: 'Generum - Dress Recommendation',
      url: 'https://github.com/Ambartiwari2001/Generum-Dress-Recommendation',
      role: 'Full Stack Developer',
      stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
      isPrivate: false,
      description:
        'Generum is a dress recommendation website that suggests dresses based on user data. Developed using Laravel and MySQL, focusing on user-friendly UI and efficient recommendation logic.'
    },
    {
      id: 3,
      title: 'My Portfolio',
      url: 'https://github.com/Ambartiwari2001/my-portfolio',
      role: 'Frontend Developer',
      stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'GSAP'],
      isPrivate: false,
      description:
        'Personal portfolio website built using React and Next.js, featuring smooth animations with GSAP and responsive design using Tailwind CSS. Highlights my projects, skills, and professional journey.'
    }
  ]
} as const;
