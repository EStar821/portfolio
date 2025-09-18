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
      "Architected and maintained microservices powering AI-driven computer vision platforms, enabling faster and more reliable model inference for enterprise clients in e-commerce(product recognition, visual search).",
      "Built FastAPI microservices for GPU-accelerated inference, reducing average response times and improving accuracy in product-matching workflows.",
      "Designed and maintained scalable ingestion pipelines with Kafka + Django ORM, processing millions of product images and metadata records daily to keep catalogs fresh and reliable.",
      "Applied database optimizations (indexing, partitioning, caching strategies) that cut catalog query times, directly improving product search responsiveness.",
      "Hardened backend security with RBAC and JWT-based authentication, ensuring compliance with GDPR and PCI DSS in handling sensitive retailer and customer data.",
      "Implemented real-time monitoring and observability using Prometheus + Grafana, improving anomaly detection and reducing downtime incidents.",
      "Partnered with AI engineers to productionize deep learning models for duplicate detection and visual similarity, reducing product mismatches in search results.",
      "Contributed backend APIs to React/Next.js storefronts, ensuring seamless integration of product search and personalized recommendations in the customer experience."
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "Global BrainForce",
    icon: "/company/brainforce.png",
    iconBg: "#383E56",
    date: "5/2019 - 3/2023",
    points: [
      "Built and maintained C# .NET Core and Python APIs for electronic health record (EHR) and claims systems, ensuring reliability and security for millions of patient records.",
      "Migrated legacy ETL jobs into Azure Data Factory, cutting runtimes from 4 hrs → 1.5 hrs, which improved data freshness for clinical reporting and analytics.",
      "Implemented RBAC + OAuth2 authentication, meeting HIPAA compliance for sensitive patient data.",
      "Designed scalable ingestion pipelines using Kafka + .NET Core, supporting real-time patient record updates and hospital workflow automation.",
      "Enhanced observability with Datadog + New Relic dashboards, improving anomaly detection and reducing healthcare system downtime.",
      "Developed event-driven microservices with .NET Core + Kafka, enabling near real-time processing of 50k+ daily banking transactions.",
      
      "Architected backend components for a payments and claims gateway, handling 7000 TPS with <90ms latency using .NET Core, gRPC, and optimized SQL.",
      "Delivered a fraud detection API leveraging event sourcing, cutting false positives and saving financial analysts 20+ hrs/week.",
      "Automated infrastructure provisioning with Terraform + Azure ARM templates, reducing environment setup across financial systems.",
      "Expanded unit and integration test coverage, reducing fintech production incidents.",
      "Automated CI/CD pipelines with Azure DevOps, streamlining deployments across both healthcare and fintech programs.",
      "Introduced Dockerized services, reducing developer onboarding time from 2 days → <4 hrs and accelerating agile delivery during COVID-19.",
      "Mentored 3 junior developers, improving backend code quality and cloud practices, which increased squad velocity.",
    ],
  },
  {
    title: " Software Developer",
    company_name: "Chromedia Inc",
    icon: "/company/chromedia.png",
    iconBg: "#383E56",
    date: "06/2018 - 08/2019",
    points: [
      " Assisted in developing inventory and promotions CMS modules with REST APIs, enabling same-day updates to vehicle listings and offers.",
      "Implemented contact, appointment, and service-booking forms with server-side validation and anti-spam features, increasing successful submissions.",
      "Partnered with a senior dev to optimize database schema and add indexes, improving query performance on vehicle searches.",
      "Optimized site performance with image compression, caching, and critical CSS, cutting median page load times on 4G.",
      "Supported cross-browser/device QA (Chrome, Safari, Edge, iOS, Android), resolving ~30 issues pre-launch.",
      "Collaborated with designers on mobile-first layouts, reducing layout shift (CLS) and improving mobile engagement time on showroom and comparison pages.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Ryan Rosie De Guzman",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/christopher-abella-01a05b384/",
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
