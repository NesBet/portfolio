import {
  mobile,
  backend,
  creator,
  web,
  mwangi,
  muchiri,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  iot,
  siemens,
  porsche,
  dekut,
  velos,
  patahome,
  hubbis,
  bosco,
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
    icon: porsche,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Diagnosing and Repairing Mechatronic Components: Identifying and resolving issues within the vehicle's mechatronic systems like the PDK transmission, ensuring seamless integration between the various components.",
      "Analyzing and Servicing HVAC Systems: Conducting thorough diagnostics and perform necessary maintenance on the vehicle's HVAC systems to ensure optimal climate control and passenger comfort.",
      "Programming and Optimizing Engine Control Units (ECUs): Coding and tuning ECUs to enhance engine performance, emissions control and tailoring the vehicle's software to meet specific performance objectives.",
      "Diagnosing and Repairing Electrical Systems: Repairing complex electrical systems within the vehicle, addressing issues ranging from wiring faults to sensor malfunctions.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "CDED - DeKUT",
    icon: dekut,
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing Interactive 3D Visualizations: Implementing high-performance, visually engaging 3D web applications using the Three.js framework.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing Cybersecurity Measures: Protecting web applications from vulnerabilities, ensuring data integrity, confidentiality and compliance with industry standards.",
      "Enhancing User Experience (UX) and User Interface (UI): Creating intuitive and aesthetically pleasing interfaces, and applying design principles to improve overall user satisfaction and engagement.",
    ],
  },
  {
    title: "Digital twinning of an elevator",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#383E56",
    date: "May 2023 - Dec 2023",
    points: [
      "3D Modeling and Simulation: Utilizing Blender to create detailed 3D models of the elevator system, enabling accurate simulations of its mechanical components and operations. ",
      "IoT Integration: Employed Node-RED to design and implement data flow architectures, facilitating seamless communication between IoT sensors, devices and the digital twin for real-time monitoring and control.",
      "PLC Programming and Synchronization: Programming PLCs to synchronize the physical elevator system with its digital counterpart, ensuring accurate real-time data exchange and operational coherence.",
      "System Performance Analysis and Optimization: I analyze data from the digital twin to assess system performance, identify potential issues and implement optimizations to enhance efficiency and reliability.",
    ],
  },
  {
    title: " IoT Systems Developer",
    company_name: "Kamuny farm",
    icon: iot,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Designing and Implementing Sensor Networks: Deploying extensive networks of IoT sensors to monitor critical environmental parameters such as temperature ensuring optimal conditions for plant growth.",
      "Developing Automated Control Systems: Developing automated systems that manage irrigation, ventilation, lighting and climate control within the greenhouse.",
      "Integrating Data Analytics Platforms: Implementing data analytics solutions to collect, process and analyze environmental data, for optimizing crop management and improving yield predictions.",
      "Ensuring System Security and Reliability: Establishing robust cybersecurity measures to protect the greenhouse's IoT infrastructure from potential threats.",
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
    image: mwangi,
  },
  {
    testimonial:
      "I've never met a dedicated engineer who truly cares about their clients' success like Nehemiah does.",
    name: "Prof. Jean Bosco",
    designation: "CEO",
    company: "Siemens Centre, Nyeri",
    image: bosco,
  },
  {
    testimonial:
      "After Nehemiah optimized our elevator system, our maintenance budget reduced by 50%. We can't thank him enough!",
    name: "Prof. Eng. Peter N. Muchiri",
    designation: "Vice Chancellor",
    company: "DeKUT",
    image: muchiri,
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
    image: velos,
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
    image: hubbis,
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
    image: patahome,
    source_code_link: "https://github.com/NesBet/patahome",
    deployed_link: "https://patahome.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
