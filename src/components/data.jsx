import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' }, { id: nanoid(), href: '#projects', text: 'projects' },

  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'ServiceNow',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in ServiceNow, building interactive and dynamic App Engine studio applications, create ML algorythm using Predictive Intelligent',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://zkabwang.github.io/Next-Tea/images/prod5.jpeg',
    url: 'https://zkabwang.github.io/Next-Tea/index.html',
    github: 'https://zkabwang.github.io/Ztech/',
    title: 'Nexxt Tea-Station project',
    text: 'This is a Tea station project. You can explore the website and choose to learn about differnt flavors of teas from around the world.',
  },
  {
    id: nanoid(),
    img: 'https://zkabwang.github.io/futureroads/images/Best-Beaches.jpg',
    url: 'https://zkabwang.github.io/futureroads/',
    github: 'https://zkabwang.github.io/Ztech/',
    title: 'FutureRoads project',
    text: 'Have you ever wanted to travel the world? Well, FutureRoads touring agency is here to give you the best experience while visiting different countries.',
  },
  {
    id: nanoid(),
    img: 'https://mtc4-310200.web.app/img/ThuG.webp',
    url: 'https://mtc4-310200.web.app/',
    github: 'https://zkabwang.github.io/Ztech/',
    title: 'Matching game project',
    text: 'Unimited Epic matching game. A Real simple game app click and flip cards over to Match the pictures ',
  },
];
