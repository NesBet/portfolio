import {
  mobile,
  backend,
  creator,
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
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Node-red Developer",
    icon: mobile,
  },
  {
    title: "PLCs Developer",
    icon: backend,
  },
  {
    title: "Digital Twins Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
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
    title: "Automotive Engineer",
    company_name: "Porsche",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "CDED - DeKUT",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Digital twinning of an elevator",
    company_name: "DeKUT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " IoT Systems Developer",
    company_name: "Kamuny farm",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nehemiah proved me wrong.",
    name: "Dr. Mwangi",
    designation: "CEO",
    company: "CDED",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a dedicated engineer who truly cares about their clients' success like Nehemiah does.",
    name: "Prof. Jean Bosco",
    designation: "CEO",
    company: "Siemens Centre, Nyeri",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nehemiah optimized our elevator system, our maintenance budget reduced by 50%. We can't thank him enough!",
    name: "Prof. Eng. Peter N. Muchiri",
    designation: "Vice Chancellor",
    company: "DeKUT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Velos Lifetime Lodge",
    description:
      "Web-based platform that allows users visitors to observe various recreation activities available in Velos Lifetime Lodge, providing a convenient and efficient solution for vacation planning needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/NesBet/Velos",
    deployed_link: "https://velos-lodge.vercel.app",
  },
  {
    name: "Hubbis Shop",
    description:
      "Web application that enables users to shop for various electronic devices, providing a convenient way to purchase electronics at competitive prices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/NesBet/Hubbis-Shop",
    deployed_link: "https://github.com/NesBet/Hubbis-Shop",
  },
  {
    name: "Patahome",
    description:
      "A comprehensive home buying platform that allows users to views bungalows, apartments, and studios and offers curated recommendations for popular residential estates.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NesBet/patahome",
    deployed_link: "https://patahome.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
