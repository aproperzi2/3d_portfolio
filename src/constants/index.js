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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sas,
  wordpress,
  improving,
  snippets,
  merit,
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
    title: "CMS Development",
    icon: wordpress,
  },
  {
    title: "React Development",
    icon: reactjs,
  },
  {
    title: "Mobile Development",
    icon: tailwind,
  },
  {
    title: "Backend Development",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SAS",
    icon: sas,
    iconBg: "#fff",
    date: "March 2021 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Improving",
    icon: improving,
    iconBg: "#fff",
    date: "March 2021 - June 2023",
    points: [
      "Software development consultant for the Calgary branch.",
      "Collaberating with clients to achieve high quality software solutions.",
      "ImprovingU Champion - Running extra curricular work activities.",
      "Coordinating client needs to upper management.",
    ],
  },
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
    name: "Snippets Hair Co.",
    description:
      "Lacombe hair studio in central Alberta. This site was asked to be implemented with Squarespace because of preferable CMS.",
    tags: [
      {
        name: "squarespace",
        color: "blue-text-gradient",
      },
    ],
    image: snippets,
    source_code_link: "https://www.snippetshairco.com/",
  },
  {
    name: "Merit-Based Booking and Management",
    description:
      "MBBM is a music management and booking company based out of Calgary, Alberta. This site was asked to be implemented with Squarespace because of preferable CMS.",
    tags: [
      {
        name: "squarespace",
        color: "blue-text-gradient",
      },
    ],
    image: merit,
    source_code_link: "https://www.meritbasedbooking.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
