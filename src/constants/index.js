import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    codeAlpha,
    freelancer,
    
    rent,
    carrent,
    fleetManage,
    incAndexp,
    threejs,
  } from "../assets";
  
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Full stack Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FreeLancer",
      company_name: "FreeLancer",
      icon: freelancer,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Internship (full stack development)",
      company_name: "CodeAlpha",
      icon: codeAlpha,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Aug 2024",
      points: [
        "Completing tasks given on existing projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Manager",
      company_name: "Car rental company",
      icon: rent,
      iconBg: "#383E56",
      date: "Jan 2020 - Jan 2024",
      points: [
        "Operations Management.",
        "Staff Supervision.",
        "Customer Service.",
        "Sales and Marketing.",
      ],
    },
    
  ];
  
  
  
  const projects = [
    {
      name: "Car Rent Booking",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mohammadhawi",
    },
    {
      name: "Car Rental Fleet Managment",
      description:
        "Web application where you can manage your fleet by adding contracts which will control you fleet availabilty.",
      tags: [
        {
          name: "asp.net core",
          color: "blue-text-gradient",
        },
        {
          name: "sql server",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: fleetManage,
      source_code_link: "https://github.com/mohammadhawi",
    },
    {
      name: "Incomes and expenses management",
      description:
        "A simple web application for managing incomes and expenses, featuring user-friendly statistics displayed with Chart.js.  ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "chart.js",
          color: "pink-text-gradient",
        },
      ],
      image: incAndexp,
      source_code_link: "https://github.com/mohammadhawi",
    },
  ];
  
  export { services, technologies, experiences, projects };
  