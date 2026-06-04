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
  heroURL: '/images/personal-images/Me.png',
  content: [
    {
      type: 'text',
      data: 'Hi, I’m <strong>Ambar Tiwari</strong> — a passionate <strong>Laravel Developer</strong> and <strong>Software Engineer</strong> who believes in creating impactful, efficient, and modern web applications that solve real-world problems.'
    },
    {
      type: 'text',
      data: 'I started my professional journey with a <strong>Java Developer Internship</strong> at Signimus Technologies, where I built backend modules using <strong>JDBC</strong> and <strong>MySQL</strong>, and designed REST APIs following the <strong>MVC architecture</strong>. This provided me with a strong foundation in OOP principles, SQL optimization, and clean backend logic. Later, I expanded my expertise to <strong>PHP (Laravel)</strong>, <strong>WebSockets</strong>, and <strong>React/Next.js</strong> to build fully responsive, real-time, and scalable full-stack applications.'
    },
    {
      type: 'list',
      title: 'My current technical expertise includes:',
      data: [
        '<strong>Languages & Frameworks:</strong> PHP, Laravel, Java, Python, Node.js, Express, React.js, Next.js',
        '<strong>Backend & Database:</strong> MySQL, MongoDB, REST APIs, JWT Auth, jQuery, SQL',
        '<strong>Real-time & Async:</strong> WebSocket, Laravel Reverb, Redis/Caching, Queues & Jobs, Push Notifications',
        '<strong>Integrations & Storage:</strong> OpenAI API, Payment Gateways, Email Systems, XML Processing, AWS S3',
        '<strong>Tools & Platforms:</strong> Git, GitHub, Postman, VS Code, XAMPP, Laragon, Linux'
      ]
    },
    {
      type: 'text',
      data: 'I have earned the <strong>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</strong> credential, reflecting my commitment to designing cloud-based and AI-powered solutions. My goal is to build intelligent, scalable, and user-centric digital products.'
    },
    {
      type: 'text',
      data: 'During my time at <strong>Amcodr IT Solution</strong>, I architected and delivered complex backend architectures, including a full-stack OLX-style marketplace with 60+ RESTful APIs and real-time chat powered by Laravel Reverb, and an end-to-end real estate admin portal (Sixtiva) integrated with AWS S3. I also built high-throughput XML data pipelines enriched by the OpenAI API using Laravel Queues.'
    },
    {
      type: 'text',
      data: 'Outside of corporate roles, I developed <strong>Generum</strong> — an AI-based clothing recommendation system designed for dynamic product recommendations, showcasing my ability to integrate backend services with interactive frontend logic.'
    },
    {
      type: 'text',
      data: 'My professional vision is to build software that’s not just functional but future-ready — combining the robustness of <strong>Laravel</strong> with the flexibility of <strong>Next.js</strong> and the intelligence of <strong>AI</strong>.'
    },
    {
      type: 'text',
      data: 'When I’m not coding, I love creating motivational and knowledge-based content on <strong>YouTube</strong> and <strong>Instagram</strong>, inspiring others to pursue growth, discipline, and purpose through my ‘<strong>Purusharth</strong>’ series.'
    },
    {
      type: 'text',
      data: 'I’m always open to collaborations, innovative projects, and learning opportunities. Let’s connect and build something impactful together — the future of software is intelligent, and I want to be a part of shaping it. 🚀'
    }
  ]
} as const;
