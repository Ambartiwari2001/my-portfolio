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
    year: 2024,
    location: 'Ahmedabad, Gujarat, India',
    date: 'Apr 2024 - Present',
    title: 'Laravel Developer - Amcodr IT Solutions Pvt. Ltd.',
    url: 'https://www.linkedin.com/company/amcodr-it-solutions-pvt-ltd/posts/?feedView=all',
    description:
      '<p>Working as a Laravel Developer, architecting and delivering scalable full-stack web applications, real-time messaging, and high-performance data processing systems.</p>',
    items: [
      'Architected and delivered a full-stack OLX-style marketplace with 60+ RESTful APIs, wallet system, listing plans, and Sanctum authentication.',
      'Built a real-time chat system using WebSocket & Laravel Reverb supporting text, image, and file sharing with zero-refresh UX.',
      'Engineered push notifications via FCM tokens and real-time alerts using Laravel Events, Observers, and Queues.',
      'Developed a complete real estate platform (Sixtiva) with AWS S3 media storage, role-based access control (Spatie), and enquiry tracking.',
      'Designed a high-throughput XML data pipeline enriched by the OpenAI API using Laravel Queues & Jobs to process lakhs of records asynchronously.'
    ]
  },
  {
    id: 2,
    year: 2024,
    location: 'Indore, Madhya Pradesh, India',
    date: 'Jan 2024 - Apr 2024',
    title: 'Java Developer Intern - Signimus Technologies Pvt. Ltd',
    url: 'https://www.linkedin.com/company/signi-mus/posts/?feedView=all',
    description:
      '<p>Completed a Java development internship, building backend modules and gaining professional experience in software architecture and database design.</p>',
    items: [
      'Developed Java-based backend modules using JDBC & MySQL for a Library Management System.',
      'Designed and implemented REST APIs with basic authentication following the MVC architecture pattern.',
      'Gained hands-on experience with Java OOP principles, SQL query optimization, and structured backend development.'
    ]
  },
  {
    id: 3,
    year: 2022,
    location: 'AKS University, Satna, Madhya Pradesh, India',
    date: 'Aug 2022 - May 2024',
    title: 'Master of Computer Application (MCA)',
    description:
      '<p>Completed MCA with a strong focus on software engineering, database systems, web technologies, and real-world application development.</p>',
    items: [
      'Graduated with a CGPA of <strong>8.06 / 10.00</strong>.',
      'Built academic and personal projects that strengthened OOP, MVC architecture, and programming fundamentals.'
    ]
  },
  {
    id: 4,
    year: 2025,
    location: 'Online / Various Platforms',
    date: '2024 - 2025',
    title: 'Professional Certifications',
    description:
      '<p>Successfully earned multiple professional certifications validating proficiency in cloud computing, artificial intelligence, frontend, and backend development.</p>',
    items: [
      '<strong>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</strong> — Oracle',
      '<strong>React Certification</strong> — HackerRank',
      '<strong>Java Certification</strong> — Signimus Technologies'
    ]
  }
];

export const JOURNEY_DATA = {
  title: 'My Professional Journey',
  footer: 'Laravel Developer who builds web applications, solves real-world problems, and creates practical solutions for real-world challenges.',
  description: 'On a journey toward becoming a <span className="text-2xl font-bold">Laravel Developer & Software Engineer</span>',
  items: JOURNEY_ITEM_DATA,
} as const;
