import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg"
import DevOpsIcon from './../public/assets/icons/devops.svg'

const staticText = {
  owner: "Rohit Singh",
  designation: "Backend Developer",
  aboutMain: "I am Rohit Singh, a Backend Developer with expertise in Java, Spring Boot, \n" +
"and microservices architecture. Currently pursuing a B.Tech in Electronics \n" +
"and Telecommunications at Bharati Vidyapeeth University, Pune, I specialize \n" +
"in building scalable, secure, and efficient backend solutions. \n" +
"My experience includes working with Docker, Kubernetes, RabbitMQ, \n" +
"and cloud platforms, as well as implementing CI/CD pipelines. I also have \n" +
"strong database expertise in MySQL and PostgreSQL, ensuring optimal \n" +
"data management and performance. \n" +
"I am passionate about creating robust APIs and leveraging modern technologies \n" +
"to optimize systems and enhance user experiences.",
  aboutSub: "Let's collaborate to bring your ideas to life!",
  mail: "sirohit328@gmail.com",

}

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "DevOps",
    icon: <DevOpsIcon/>,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    }
  ],
  frameworks: [
    {
      "name": "Spring",
      "icon": "/assets/tech/spring-boot.svg",
      "link": "https://spring.io/"
    },
    {
      name: "Spark",
      icon: "/assets/tech/spark.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Hibernate",
      icon: "/assets/tech/hibernate.svg",
      link: "https://hibernate.org/",
    }
  ],
  libraries: [
    {
      "name": "Socket",
      "icon": "/assets/tech/socket.svg",
      "link": "https://pandas.pydata.org/"
    },
    {
      "name": "Liquibase",
      "icon": "/assets/tech/liquibase.svg",
      "link": "https://www.liquibase.com/"
    },
    {
      "name": "Spring Security",
      "icon": "/assets/tech/springSecurity.svg",
      "link": "https://spring.io/projects/spring-security"
    },
    {
      "name": "Spring Data JPA",
      "icon": "/assets/tech/springDataJPA.svg",
      "link": "https://spring.io/projects/spring-data-jpa"
    },
    {
      "name": "Spring Web Services",
      "icon": "/assets/tech/springWeb.svg",
      "link": "https://spring.io/projects/spring-ws"
    },
    {
      "name": "Spring Cloud",
      "icon": "/assets/tech/springCloud.svg",
      "link": "https://spring.io/projects/spring-cloud"
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      "name": "IntelliJ",
      "icon": "/assets/tech/intellij.svg",
      "link": "https://www.jetbrains.com/idea/"
    },
    {
      "name": "AWS",
      "icon": "/assets/tech/aws.svg",
      "link": "https://aws.amazon.com/"
    },
    {
      "name": "Apache Kafka",
      "icon": "/assets/tech/kafka.svg",
      "link": "https://kafka.apache.org/"
    },
    {
      "name": "Kubernetes",
      "icon": "/assets/tech/kubernetes.svg",
      "link": "https://kubernetes.io/"
    },
    {
      "name": "GitHub Actions",
      "icon": "/assets/tech/actions.svg",
      "link": "https://github.com/features/actions"
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "Go Smart Fintools",
    icon: "/assets/company/udyam.svg",
    iconBg: "#E6DEDD",
    date: "October 2024 - Current",
    points: [
    "Contributed to a financial loan management platform by developing APIs focused on validation, report generation, and backend optimization. \n" + 
    "This involved leveraging Spring Boot for building robust, scalable services, Spring Data JPA for efficient database management, \n" + 
    "and Spring Security to implement secure access controls, ensuring the integrity of sensitive financial data. \n" + 
    "Additionally, I utilized Spring Web Services to integrate various system components and facilitate smooth data exchange across different services. \n",
    "To improve system performance and scalability, I optimized data handling processes using MySQL for fast and reliable database queries \n" + 
    "and Liquibase for seamless database version control and schema management."
    ]
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Delegated YouTube Content Manager",
    description:
      "Developed a solution to simplify video management on YouTube, enabling channel owners to delegate video uploads to authorised editors with an approval workflow to ensure content aligns with channel guidelines. Added features like automated video preview generation and notification workflows for approval. Secured the application using encrypted access tokens and JWT for endpoint protection. Implemented a video review mechanism for quality control and adherence to guidelines. Configured CI/CD pipelines with GitHub Actions for seamless testing and deployment and documented APIs using Swagger UI for clear developer communication.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "oAuth2",
        color: "pink-text-gradient",
      }
    ],
    image:
      "/assets/projects/youtube-upload.svg",
    source_code_link: "https://github.com/imrohit68/youtube-upload",
    deployed_link: "http://13.203.192.43:8090/swagger-ui/index.html#/",
  },
  {
    name: "Real-Time Collaborative Code Editor",
    description:
      "Engineered a collaborative code editor backend using Spring Boot and WebSocket, implementing real-time code synchronisation across multiple users. Built a robust architecture using Spring's @MessageMapping for WebSocket communication and RESTful endpoints for code history retrieval. Implemented concurrent session management using ConcurrentHashMap to handle multiple collaborative rooms, ensuring thread-safe operations for simultaneous user interactions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "WebSocket",
        color: "green-text-gradient",
      },
  
    ],
    image: "/assets/projects/collab-editor.png",
    source_code_link: "https://github.com/imrohit68/collab-editor",
    deployed_link: "http://13.203.192.43:8080/",
  },
  {
    name: "Microservice Architecture using Spring Boot Framework",
    description:
      "Developed a scalable microservices architecture using Spring Boot, ensuring well-structured design and containerization for flexibility. Implemented service discovery with Spring Cloud Eureka and secured authentication with Keycloak and OAuth 2.0. Integrated Resilience4j for fault tolerance and used Loki, Prometheus, and Tempo for real-time monitoring and tracing. Designed an event-driven system with RabbitMQ and Spring Cloud Function, enhancing responsiveness. Leveraged Docker and Kubernetes for efficient deployment and resource management, ensuring high scalability, resilience, and observability",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "pink-text-gradient",
      },
      {
        name: "Grafana",
        color: "orange-text-gradient",
      },
      {
        name: "Prometheus",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/microservices.svg",
    source_code_link:
      "https://github.com/imrohit68/sports-app-microservies",
    deployed_link:
      "https://github.com/imrohit68/sports-app-microservies",
  },
  {
    name: "E-commerce Printing Backend – Spring Boot & AWS",
    description:
      "Developed a robust end-to-end backend for an E-commerce Printing Platform using Spring Boot, PostgreSQL, and AWS. Designed and implemented RESTful APIs for user authentication, store registration, order placement, and payment processing. Integrated OTP-based login with JWT authentication for secure access control. Managed document storage and retrieval using AWS S3, ensuring efficient file handling. Enabled seamless payment transactions through Razorpay, supporting multiple payment methods. Optimised database interactions with Spring Data JPA for efficient order and user management. Deployed the application on AWS EC2.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/print-app.png",
    source_code_link:
      "https://drive.google.com/drive/folders/1Y5Wz-j92KCebeEZTDTFnPiuU7cuWWHd_?usp=sharing",
    deployed_link:
      "https://drive.google.com/drive/folders/1Y5Wz-j92KCebeEZTDTFnPiuU7cuWWHd_?usp=sharing",
  }
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/imrohit68/",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/imrohit68/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/imrohit68/",
  },
];

const heroTexts = [
  "Backend Developer",
  500,
  "DevOps",
  500,
  "Cloud Native",
  500,
  "Problem solver",
  500,
];

export {
  staticText,
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
