export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: "/backend.webp",
  },
  {
    title: "Technical Project Manager",
    icon: "/web.webp",
  },
  {
    title: "DevOps Engineer",
    icon: "/mobile.webp",
  },
  {
    title: "AI & Automation Specialist",
    icon: "/creator.webp",
  },
];

// const technologies = [
//   {
//     name: "Javascript",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
//   },
//   {
//     name: "Python",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "PHP",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
//   },
//   {
//     name: "C/C++/C#",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
//   },
//   {
//     name: "AWS",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
//     name: "Next.JS",
//   },
//   {
//     name: "Django",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500",
//   },
//   {
//     name: "PostgreSQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500",
//   },
//   {
//     name: "Vue",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500",
//   },
//   {
//     name: "Docker",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "GraphQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500",
//     name: "Java",
//   },
// ];

const skills = {
  backend: [
    "Python(Django, Flask, FastAPI),",
    "C#(.NET, ASP.NET Core)",
    "Node.js(TypeScript, JavaScript, Express.js)",
    "Java (Spring Boot)",
    "PHP(Laravel, CI)",
    "Go(Golang)",
    "gRPC",
    "NestJS",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "Vue.js",
    "React Native",
    "Tailwind CSS",
    "MUI",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  cloud: [
    "AWS (EC2, Lambda, S3, CloudWatch, ECS, Fargate)",
    "Google Firebase",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
    "Helm",
  ],
  data: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "CassandraDB",
    "Elasticsearch",
    "Snowflake",
    "BigQuery",
  ],
  api: [
    "REST APIs",
    "GraphQL",
    "gRPC",
    "JWT/OAuth2 Authentication",
    "WebSockets",
    "OpenAPI",
    "Swagger",
  ],
};

const experiences = [
  {
    title: " Senior Software Engineer",
    company_name: "Hireplicity, Inc.",
    icon: "/company/hireplicity.png",
    iconBg: "#383E56",
    date: "04/2023 -  Present",
    points: [
      "Engineered a scalable microservices architecture using Python (Django, FastAPI, Flask) for government procurement workflows, achieving 99.99% uptime and processing 500+ daily requests.",
      "Built a GraphQL layer that allowed fine-grained queries over large sets of solicitation data and agency documents, reducing over-fetching and boosting performance by 30%.",
      "Implemented WebSocket-based alerts for newly published opportunities, approaching deadlines, and updates on proposal evaluations, providing users with instant, actionable insights.",
      "Centralized government contracting data by migrating 100,000+ records into MongoDB, and automated real-time updates from government sources via Apache Kafka, ensuring the system displayed the most current information.",
      "Established role-based access control (RBAC) utilizing OAuth2 and JWT authentication protocols; mitigated potential data breaches by 65% and ensured compliance with industry security standards.",
      "Implemented rate limiting and API throttling using Redis, supporting 50+ client applications concurrently while preventing denial-of-service attacks, improving overall system reliability and availability."
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "Global BrainForce",
    icon: "/company/brainforce.png",
    iconBg: "#383E56",
    date: "5/2019 - 3/2023",
    points: [
      "Pioneered high-throughput backend services in Java (Spring Boot) incorporating gRPC and Apache Kafka, processing 5,000+ transactions per second while reducing average latency to 85ms.",
      "Optimized Java Spring Boot microservices, decreasing latency in critical transaction workflows to an average of 85ms while handling peak loads of 7,000 transactions per second.",
      "Integrated AWS Lambda serverless functions into application architecture, reducing infrastructure costs by 30% and decreasing average function execution time by 50ms.",
      "Integrated MongoDB and Oracle with read replicas for high-availability storage.",
      "Engineered real-time dashboards within Splunk that visualized system performance, identified bottlenecks, and improved incident response times while monitoring 50+ transaction pipelines.",
      "Automated infrastructure provisioning with Terraform, reducing setup time by 60%.",
      "Fortified system security by enforcing role-based access control across five key applications and enabled AES-256 encryption, exceeding regulatory requirements for financial data protection and compliance.",
      "Orchestrated the development of 10+ high-performance backend microservices using Go (Golang), improving API response times by 30% and enabling support for 2 million concurrent users.",
      "Refined scalable data infrastructure utilizing DynamoDB for efficient storage of media metadata and game states, achieving a 20% reduction in database query latency due to optimized schema.",
      "Orchestrated a global content delivery network utilizing AWS CloudFront, which decreased average media loading times by 60ms for international users and supported 2M+ concurrent streams globally.",
      "Orchestrated serverless media transformation pipelines via AWS Lambda, processing 5M+ images monthly with 99.99% uptime, enabling faster content delivery and improved user experience across platforms.",
      "Initiated centralized logging using the ELK stack, capturing 100% of application logs and reducing debugging time by 30% by providing visibility into application performance, exceeding team goals.",
      "Instituted a comprehensive disaster recovery strategy employing AWS Backup and cross-region replication, achieving a Recovery Time Objective of under 15 minutes.",
      "Orchestrated performance tuning strategies with tools like Prometheus, decreasing average game latency by 150ms during peak hours, resulting in a superior user experience and higher player retention."
    ],
  },
  {
    title: " Software Developer",
    company_name: "Chromedia Inc",
    icon: "/company/chromedia.png",
    iconBg: "#383E56",
    date: "06/2018 - 08/2019",
    points: [
      "Accelerated core API enhancements with Node.js (NestJS) following senior engineer guidance; increased API test coverage and decreased server response times by 150ms, as measured by Datadog.",
      "Fashioned responsive UIs with Tailwind CSS and React, resolving 80% of cross-browser compatibility issues and boosting average page load speed by 20% on mobile devices.",
      "Forged scalable data architecture using SQLite for local development environments and Snowflake for analytical workloads, enabling 10+ engineers to conduct efficient data analysis and reporting.",
      "Orchestrated microservice communication using Apache Kafka, achieving 99.99% uptime, and enhanced application responsiveness by optimizing Redis cache invalidation policies during peak traffic.",
      "Orchestrated infrastructure-as-code using Terraform, automating provisioning of 50+ virtual machines, and slashing deployment times by 60%, while ensuring adherence to security protocols and infrastructure compliance.",
      "Actively contributed in code reviews with senior developers and participated in documentation and best practice sharing sessions."
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Christopher Pascual Abella",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/christopher-abella-854638389",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Wordpress";
}[] = [
  {
    name: "HealthTap – Virtual Primary Care Platform",
    description:
      "Developed a responsive and secure healthcare platform that enables patients to connect with doctors and access personalized care. Focused on performance, accessibility, and HIPAA-compliant design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "orange-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/healthtap.png",
    platform: "Web",
    deploy_link: "https://www.healthtap.com/",
  },
  {
    name: "Sierra Structures – Commercial Website",
    description:
      "Built a user-friendly website for a leading fencing and structures company, featuring interactive service pages, lead generation forms, and a clean design for improved customer engagement.",
    tags: [
      {
        name: "ASP.NET",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sierra.png",
    platform: "Web",
    deploy_link: "https://www.sierrastructures.com/",
  },
  {
    name: "Chirayu Hospital – Multispeciality Hospital",
    description:
      "Designed and developed a modern hospital website to showcase medical services, departments, and facilities. Throughout the development, focused on ease of navigation, patient trust, and accessibility.",

    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/chirayu.png",
    platform: "Web",
    deploy_link: "https://www.chirayuhospitaljaipur.com/",
  },
  {
    name: "eToro – Social Trading & Investment Platform",
    description:
      "Contributed to building a scalable trading platform supporting stocks, crypto, and ETFs. Implemented secure APIs and optimized performance to ensure a smooth trading experience for millions of users globally.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/etoro.png",
    platform: "Web",
    deploy_link: "https://www.etoro.com/",
  },
  {
    name: "RangeTrainer – Golf Practice & Improvement",
    description:
      "Developed a specialized sports web app that helps golfers improve practice sessions through structured training plans, progress tracking, and interactive drills. Delivered a sleek UI with mobile-first design.",

    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/rangetraner.png",
    platform: "Web",
    deploy_link: "https://rangetrainer.app/",
  },
  {
    name: "Toyota Lipa – Automotive Dealership Website",
    description:
      "Built a responsive dealership website to showcase Toyota’s latest models, promotions, and customer services. Integrated booking features and optimized for local SEO to attract new buyers.",

    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/toyotalipa.png",
    platform: "Web",
    deploy_link: "https://toyotalipa.com/",
  },
];

export { services, skills, experiences, testimonials, projects };
