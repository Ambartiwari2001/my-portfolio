export const ABOUT_ME_CONTENT_TYPE = {
  text: 'text',
  list: 'list',
  image: 'image',
  component: 'component'
} as const;

export const ABOUT_ME_COMPONENT_NAMES = {
  recommendations: 'recommendations',
  competition: 'competition'
} as const;

type AboutMeImageContent = {
  url: string;
  type: 'image';
  title: string;
  width: number;
  height: number;
  tooltip?: string;
  className?: string;
};

type AboutMeListContent = {
  title: string;
  data: string[];
  type: 'list';
};

type AboutMeTextContent = {
  data: string;
  type: 'text';
};

type ABOUT_ME_COMPONENT_NAMES_KEYS = keyof typeof ABOUT_ME_COMPONENT_NAMES;
type AboutMeComponentContent = {
  name: (typeof ABOUT_ME_COMPONENT_NAMES)[ABOUT_ME_COMPONENT_NAMES_KEYS];
  type: 'component';
};

export type AboutMeContentItem =
  | AboutMeTextContent
  | AboutMeListContent
  | AboutMeImageContent
  | AboutMeComponentContent;

export const ABOUT_ME_DATA: {
  heroURL: string;
  content: AboutMeContentItem[];
} = {
  heroURL: '/images/personal-images/my-photo.png',
  content: [
    {
      type: 'text',
      data: "Hi, I’m <strong>Ambar Tiwari</strong> — a passionate <strong>Laravel Developer</strong> and <strong>Software Engineer</strong> who believes in creating impactful, efficient, and modern web applications that solve real-world problems."
    },
    {
      type: 'text',
      data: "I started my journey in the IT world with a strong foundation in <strong>Java</strong> and <strong>Spring Boot</strong> during my internship, where I learned backend logic, API design, and enterprise-level development patterns. Over time, I shifted my focus toward <strong>PHP (Laravel)</strong> and <strong>Next.js</strong> to build scalable and visually appealing full-stack web applications."
    },
    {
      type: 'list',
      title: 'My current technical expertise includes:',
      data: [
        '<strong>Backend:</strong> PHP (Laravel), Java (Spring Boot), Node.js',
        '<strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js, Bootstrap',
        '<strong>Database:</strong> MySQL, MongoDB',
        '<strong>Dev Tools:</strong> Git, GitHub, XAMPP, VS Code, Postman',
        '<strong>Concepts:</strong> REST APIs, MVC Architecture, Authentication, Middleware, and AI Integration Basics'
      ]
    },
    {
      type: 'text',
      data: "Currently, I’m exploring <strong>Artificial Intelligence</strong> and learning how to integrate AI-powered features into web applications. My goal is to become a <strong>Full Stack + AI Developer</strong> who builds intelligent, scalable, and user-centric digital products."
    },
    // {
    //   width: 1200,
    //   height: 500,
    //   className: 'w-full rounded',
    //   type: 'image',
    //   url: '/images/personal-images/my-photo.png',
    //   tooltip: 'Ambar Tiwari — Laravel & Java Developer',
    //   title: 'Ambar Tiwari — Combining backend logic with AI-driven innovation'
    // },
    // {
    //   type: 'component',
    //   name: ABOUT_ME_COMPONENT_NAMES.recommendations
    // },
    {
      type: 'text',
      data: "I’ve worked on multiple projects including <strong>Generum</strong> — a smart dress recommendation website built using <strong>PHP, MySQL, and JavaScript</strong>, and a <strong>Camera Booking System</strong> that automates online bookings efficiently. These projects taught me how to handle real-world logic, API integration, and user-friendly design together."
    },
    {
      type: 'text',
      data: "My professional vision is to build software that’s not just functional but future-ready — combining the robustness of <strong>Laravel</strong> with the flexibility of <strong>Next.js</strong> and the intelligence of <strong>AI</strong>."
    },
    {
      type: 'text',
      data: "When I’m not coding, I love creating motivational and knowledge-based content on <strong>YouTube</strong> and <strong>Instagram</strong>, inspiring others to pursue growth, discipline, and purpose through my ‘<strong>Purusharth</strong>’ series."
    },
    // {
    //   type: 'component',
    //   name: ABOUT_ME_COMPONENT_NAMES.competition
    // },
    {
      type: 'text',
      data: "I’m always open to collaborations, innovative projects, and learning opportunities. Let’s connect and build something impactful together — the future of software is intelligent, and I want to be a part of shaping it. 🚀"
    }
  ]
} as const;
