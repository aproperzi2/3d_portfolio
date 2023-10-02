import {
  backend,
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
  threejs,
  sas,
  wordpress,
  improving,
  snippets,
  merit,
  jira,
} from "../assets";

export const emailJSCreds = {
  serviceId: "service_n7xw459",
  templateId: "template_exvmqc8",
  publicKey: "Q-jnFyhqapp5Qszax",
};

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
    name: "jira",
    icon: jira,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "SAS",
    icon: sas,
    iconBg: "#fff",
    date: "March 2021 - June 2023",
    points: [
      "Rewrote a legacy flash financial trading app. Converting their UI to use HTML5, JavaScript, Typescript and a third-party React component library.",
      "Developed a variety of screens, widgets, and components on the application, often creating new features that were not existing in the previous application. Such as, type ahead, auto correct and query building.",
      "Worked with the Product Owner and Stakeholders to help with the re-design of features and make decisions that were consistent with the custom framework.",
      "Improved development and QA workflow resulting in short cycle times.",
      "In the absense of our regular scrum master, I took on the role and deligated the team to project goals and deadlines which effectively kept our client in a state of assurance.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Improving",
    icon: improving,
    iconBg: "#fff",
    date: "March 2021 - June 2023",
    points: [
      "Software development consultant for the Calgary branch.",
      "Collaberating with clients to achieve high quality software solutions.",
      "Coordinating client needs to upper management.",
      "ImprovingU Champion - Running extra curricular work activities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Luca joined the team straight out of school and quickly demonstrated an aptitude for learning and developing his software development skills. Luca has since progressed into an excellent Intermediate Software Developer!",
    name: "Michael Le Feuvre",
    designation: "Technical Lead and Senior Developer",
    company: "SAS",
    image:
      "https://media.licdn.com/dms/image/C5603AQHTu5fbSMu89A/profile-displayphoto-shrink_800_800/0/1516273981418?e=1701302400&v=beta&t=9dUD-VrnxCfqmSOw6TkOzXo2RsxO4H2mav6Sloqasrc",
  },
  {
    testimonial: `I had the privilege of working closely with Luca during our time together at SAS, and I can unequivocally endorse him as an exceptional professional. Luca possesses first-rate technical skills and demonstrated an unwavering commitment to our team's success. Luca's standout qualities include his enthusiasm to accept new responsibilities and tackle challenges head-on. He would make a positive and immediate impact on any team he joined.`,
    name: "Eric Gagnon",
    designation: "Java and Database Developer, Agile Coach",
    company: "SAS",
    image:
      "https://media.licdn.com/dms/image/D5603AQHQQaUxgLlgsQ/profile-displayphoto-shrink_800_800/0/1683908445716?e=1701907200&v=beta&t=Rw7aRSxO-wGJq_Zl23u3FWqhVjYDaXhVs4RcxJm5bU8",
  },
];

const projects = [
  {
    name: "Snippets Hair Co.",
    description: "Lacombe hair studio in central Alberta.",
    // tags: [
    //   {
    //     name: "squarespace",
    //     color: "blue-text-gradient",
    //   },
    // ],
    image: snippets,
    source_code_link: "https://www.snippetshairco.com/",
  },
  {
    name: "MBBM",
    description: "Concert booking and management agency.",
    // tags: [
    //   {
    //     name: "squarespace",
    //     color: "blue-text-gradient",
    //   },
    // ],
    image: merit,
    source_code_link: "https://www.meritbasedbooking.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
