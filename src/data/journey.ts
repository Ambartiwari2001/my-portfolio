export interface JourneyItem {
  id: number;
  year: number;
  date: string;
  url?: string;
  title: string;
  location: string;
  items?: string[];
  description: string;
}

const JOURNEY_ITEM_DATA: JourneyItem[] = [
  {
    id: 1,
    year: 2022,
    location: 'AKS University, Satna, Madhya Pradesh, India',
    date: 'Sep 2022 - Sep 2024',
    title: 'Master of Computer Applications (MCA)',
    description:
      '<p>Completed <strong>MCA in Computer Science</strong>, focusing on advanced software development, algorithms, database management, and web technologies.</p>',
    items: [
      'Learned PHP, Laravel, Java, React, JavaScript, jQuery, and MySQL.',
      'Developed mini-projects and assignments to implement real-world applications.',
      'Gained practical knowledge in OOP, MVC architecture, RESTful APIs, and database optimization.',
      'Studied data structures and algorithms to write efficient and reusable code.',
      'Collaborated on group projects to enhance teamwork and project management skills.'
    ]
  },
  {
    id: 2,
    year: 2024,
    location: 'Indore, Madhya Pradesh, India',
    date: 'Jan 2024 - Apr 2024',
    title: 'Java Developer Intern - Signimus Technologies',
    url: 'https://www.linkedin.com/company/signi-mus/posts/?feedView=all',
    description:
      '<p>Completed a 4-month Java Development internship, gaining hands-on experience in building, testing, and deploying Java-based applications.</p>',
    items: [
      'Worked on real-time projects, implementing OOP concepts, data structures, and algorithms.',
      'Developed backend logic and REST APIs for internal tools.',
      'Collaborated with team members using Git for version control and Agile methodologies.',
      'Improved debugging, code optimization, and problem-solving skills.'
    ]
  },
  {
    id: 3,
    year: 2024,
    location: 'Hyderabad, Telangana, India',
    date: 'Apr 2024 - Apr 2025',
    title: 'Flight Simulator Engineer - Idyllic Futuristic Technologies LLP',
    url: 'https://www.linkedin.com/company/idyllic-futuristic-technologies/posts/?feedView=all',
    description:
      '<p>Worked as a Flight Simulator Engineer, operating and maintaining flight simulation systems for the Indian Air Force, while gaining experience in software integration and troubleshooting.</p>',
    items: [
      'Monitored and ensured high accuracy of simulation software.',
      'Collaborated with teams to test, maintain, and enhance simulator applications.',
      'Worked with Linux systems, SQL databases, and real-time software environments.',
      'Strengthened analytical, technical, and problem-solving skills relevant to IT and software development.'
    ]
  },
  {
    id: 4,
    year: 2025,
    location: 'Indore, Madhya Pradesh, India',
    date: 'Apr 2025 - Aug 2025',
    title: 'PHP Developer - Young Decade IT Software Solutions',
    url: 'https://www.linkedin.com/company/young-decade/posts/?feedView=all',
    description:
      '<p>Worked as a PHP Developer building scalable, secure, and high-performance web applications using modern technologies.</p>',
    items: [
      'Developed RESTful APIs and dynamic frontend interfaces using PHP, Laravel, React, JavaScript, and jQuery.',
      'Implemented authentication, authorization, and optimized database queries with MySQL.',
      'Followed MVC architecture and Git version control for collaborative development.',
      'Contributed to project planning, code reviews, and deployment processes.',
      'Focused on security, scalability, and improving user experience for web applications.'
    ]
  },
  {
    id: 5,
    year: 2025,
    location: 'Ahmedabad, Gujarat, India',
    date: 'Aug 2025 - Present',
    title: 'PHP Developer - AmCodr IT Solutions Pvt. Ltd.',
    url: 'https://www.linkedin.com/company/amcodr-it-solutions-pvt-ltd/posts/?feedView=all',
    description:
      '<p>Currently working as a PHP Developer, contributing to end-to-end development of secure and scalable web solutions.</p>',
    items: [
      'Designing and implementing backend systems, REST APIs, and dynamic frontends using PHP, Laravel, React, and MySQL.',
      'Optimizing application performance, database queries, and frontend responsiveness.',
      'Collaborating in team environments using Git and Agile methodology.',
      'Building applications with strong focus on security, maintainability, and client satisfaction.',
      'Continuously learning and applying modern tools and technologies to improve software quality.'
    ]
  },
  {
    id: 6,
    year: 2025,
    location: 'Online / Certification',
    date: 'Oct 2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7385677718270652416/',
    description:
      '<p>Earned the Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification, enhancing my expertise in AI, Cloud Infrastructure, and Oracle Cloud technologies.</p>',
    items: [
      'Learned to design smarter and scalable AI-powered solutions.',
      'Gained knowledge of Oracle Cloud Infrastructure services.',
      'Prepared for real-world applications in software engineering and cloud-based development.'
    ]
  }
];

export const JOURNEY_DATA = {
  title: 'My Professional Journey ...',
  footer: 'Starting from MCA to becoming a skilled PHP Developer and AI enthusiast.',
  description: 'On a journey towards becoming a <span className="text-2xl font-bold">Software Engineer</span>',
  items: JOURNEY_ITEM_DATA
} as const;
