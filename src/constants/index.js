import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and dedicated developer with expertise in React, Node.js, and Spring Boot, with experience in building dynamic and user-friendly web applications. I thrive in crafting efficient and scalable solutions, ensuring seamless integration between front-end and back-end systems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    period: "December 2023 - March 2024",
    role: "Frontend Developer",
    company: "PEAQOCK",
    description: `Internship in Front-End development contributed to web applications using ReactJS, NextJS, TypeScript, Tailwind CSS, and Ant Design. Focused on creating responsive interfaces, integrating APIs, and ensuring secure authentication with JWT across multiple projects.`,
    technologies: [
      "ReactJs, TypeScript, Tailwind, API, JWT, NextJs, AntDesign, HOC",
    ],
  },
  {
    period: "August 2023 - November2023",
    role: "Full Stack Developer",
    company: "CODINGTECH",
    description: `Advanced training in react js and spring boot.`,
    technologies: ["ReactJs, ContextAPI, PrimeReact, SpringBoot"],
  },
  {
    period: "February 2023",
    role: "Frontend Developer",
    company: "Web Agency",
    description: `Internship in JavaScript Development, focused on the front-end part of a project for a pest control company.`,
    technologies: ["ES6, Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "CoinLore Website",
    image: project1,
    description:
      "Platform for research on currencies, cryptocurrency prices, exchanges, and charts. Overview of over 1300 cryptocurrencies.",
    technologies: ["React", "Tailwind", "API", "Prime React"],
  },
  {
    title: "Paqock Landing page",
    image: project2,
    description:
      "Peacock landing page platform that helps businesses create stunning, high-converting pages effortlessly. ",
    technologies: ["React", "Tailwind", "AntDesign", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer"],
  },
  {
    title: "Coding Tech Platform",
    image: project4,
    description:
      "A platform managing a digital academy offering rigorous training to develop key coding and soft skills, addressing Morocco's growing digital sector demands.",
    technologies: ["Spring boot", "JWT", "Spring Security", "mySQL"],
  },
];

export const CONTACT = {
  address: "Casablanca, Morocco ",
  phoneNo: "+212 751166665",
  email: "elhyaniweeam@gmail.com",
};
