import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoJest from '/public/images/logos/jest-js-icon.svg';
import LogoRedux from '/public/images/logos/Redux-js-icon.svg';
import LogoD3 from '/public/images/logos/D3-js-icon.svg';

import LogoMSI from '/public/images/logos/logo-msi.svg';
import LogoMSIDark from '/public/images/logos/logo-msi-dark.svg';
import Acranton from '/public/images/logos/acranton-logo.jpg';

import AvatarShekhar from '/public/images/avatar-shekhar.png';
import AvatarShubham from '/public/images/avatar-shukla.png';
import AvatarManju from '/public/images/avatar-manju.png';
import xtratune from '/public/images/xtratune.jpg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/kumarujjwal959',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/kumarujjwalm',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/uk959/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'D3.js',
    logo: LogoD3,
    url: 'https://d3js.org/',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Jest',
    logo: LogoJest,
    url: 'https://jestjs.io/',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  }, 
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'React Native',
    logo: LogoReact,
    url: 'https://reactnative.dev/',
  },
  
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMSIDark,
    darkModeLogo: LogoMSI,
    logoAlt: 'msi logo',
    position: 'Member Technical Staff (R&D)',
    startDate: new Date(2021, 8),
    currentlyWorkHere: true,
    summary: [
      "Modernized the front-end framework, transitioning from BackboneJS to ReactJS, significantly boosting the GRC application's scalability and maintainability.",
      "Successfully led the migration of all charts within a GRC application, transitioning from Fusion Charts to D3, enhancing data visualization and interactivity.",
      "Fostered cross-functional collaboration to align project requirements and seamlessly integrate components.",
      "Followed agile methodologies for completion of project tasks with strong customer focus.",
      "Proven track record of successfully delivering projects within tight deadlines, and ability to manage multiple tasks simultaneously while maintaining attention to detail and quality."
    ],
  },
  {
    logo: Acranton,
    darkModeLogo: Acranton,
    logoAlt: 'Acranton Technologies',
    position: 'Web Developer - Intern',
    startDate: new Date(2020, 11),
    endDate: new Date(2021, 1),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'XtraTune',
    description: "Developed a sleek and intuitive song streaming application using Next.js and React.js, seamlessly integrating navigation and playback functionalities for an enhanced user experience.",
    url: 'https://github.com/kumarujjwal959/XtraTune',
    previewImage: xtratune,
    technologies: [
      'React.js',
      'Next.js',
      'typescript',
      'tailwindcss'
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Manjunatha N',
    personAvatar: AvatarManju,
    title: 'Lead Engineer (MetricStram)',
    testimonial:
      "As the team lead, I've had the pleasure of collaborating closely with Ujjwal. His coding proficiency and commitment to quality are unmatched. Ujjwal's ability to tackle challenging problems head-on and deliver stellar results has been instrumental in our team's success. With Ujjwal's expertise in our team, we're not just meeting expectations – we're delivering high quality products.",
  },
  {
    personName: 'Shubham Shukla',
    personAvatar: AvatarShubham,
    title: 'MTS(MetricStram)',
    testimonial:
      "Working alongside Ujjwal, I've witnessed his exceptional coding expertise and problem-solving skills. His dedication to quality and willingness to collaborate make him a valuable asset to our team. Ujjwal's positive attitude and eagerness to learn also makes him a pleasure to work with, further solidifying his reputation as an outstanding software developer and a good team player.",
  },
  {
    personName: 'Shekhar Dubey',
    personAvatar: AvatarShekhar,
    title: 'MTS(MetricStram)',
    testimonial:
      "Ujjwal was extremely easy and pleasant to work with and he truly cares about the project being a success. He has a high level of knowledge and was able to work on MERN stack application with me without any issues & consistently demonstrates a keen ability to tackle complex problems with innovative solutions, contributing greatly to our team's success. His collaborative nature and commitment to excellence make him an invaluable asset to any project.",
  },
];
