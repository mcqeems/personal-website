import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: "Mustaqim Nawahhudi Ma'arif",
  initials: 'DV',
  url: 'https://qeem.site',
  location: 'Karawang',
  locationLink: 'https://www.google.com/maps/place/karawang',
  description: `I'm a passionate Computer Science student with a love for building innovative solutions.`,
  summary: `As an aspiring Full-Stack Developer , I enjoy transforming ideas into functional, user-friendly applications. From designing sleek front-end interfaces to architecting efficient back-end systems, I thrive on creating seamless digital experiences. My hands-on experience with React.js has allowed me to develop responsive and interactive web apps, and I’m always eager to dive deeper into the ever-evolving world of JavaScript.`,
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Javascript',
    'Node.js',
    'Bun',
    'Python',
    'Django',
    'Java',
    'Spring',
    'Docker',
    'Astro',
    'AWS',
    'Azure',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'mcqeemsofficial@gmail.com',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/mcqeems',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mcqeems/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/mcQeems',
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/mcqeems/',
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:mcqeemsofficial@gmail.com',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'PPTIK',
      href: 'https://pptik.unida.gontor.ac.id/',
      badges: [],
      location: 'Remote',
      title: 'Software Engineer & Network Engineer',
      logoUrl: '/PPTIK.png',
      start: 'September 2024',
      end: 'Now',
      description: `I’m part of the backbone that keeps an entire university connected—literally! As a network specialist at PPTIK, a dynamic bureau organization, my mission is to ensure seamless connectivity across campus. From powering up lecture halls with lightning-fast internet to troubleshooting mysterious network glitches in the dead of night.`,
    },
  ],
  education: [
    {
      school: 'University of Darussalam Gontor',
      href: 'https://unida.gontor.ac.id/',
      degree: 'Bachelor Degree',
      logoUrl: '/logo_unida.png',
      start: '2024',
      end: '2027',
    },
    {
      school: 'Darussalam Gontor Modern Boarding School',
      href: 'https://gontor.ac.id/',
      degree: 'Middle & High School Education',
      logoUrl: '/logo_gontor.jpg',
      start: '2018',
      end: '2024',
    },
  ],
  projects: [
    {
      title: 'Renaissance',
      href: 'https://renaissance.qeem.site',
      dates: 'May 2025 - June 2025',
      active: true,
      description:
        'Renaissance is an AI-based web application designed for early education and self-support for individuals at risk of online gambling addiction.',
      technologies: [
        'React Router',
        'Typescript',
        'Firebase',
        'TailwindCSS',
        'Azure Open AI',
        'Shadcn UI',
        'Gemini AI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://renaissance.qeem.site',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mcqeems/renaissance',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/renaissance.png',
      video: '',
    },
    {
      title: 'Pokedex',
      href: 'https://pokedex.qeem.site',
      dates: 'January 2025 - February 2025',
      active: true,
      description: 'A simple Pokemon collection website.',
      technologies: ['React.Js', 'Javascript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://pokedex.qeem.site',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mcqeems/pokedex',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/pokedex.png',
      video: '',
    },
    {
      title: 'TI Whatsapp Bot',
      href: 'https://github.com/mcqeems/ti_whatsapp_bot',
      dates: 'February 2025',
      active: true,
      description: 'A smart bot based on Whatsapp to coverage the academics purposes of Computer Science Students.',
      technologies: ['Javascript', 'Node.Js', 'Baileys'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/mcqeems/ti_whatsapp_bot',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/ti_whatsapp.png',
      video: '',
    },
    {
      title: 'Jadwal Perkuliahan',
      href: 'https://github.com/mcqeems/jadwal_perkuliahan',
      dates: 'November 2024 - Desember 2025',
      active: true,
      description: 'A college class schedule management simulation web app.',
      technologies: ['Python', 'Django', 'SQLite'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/mcqeems/jadwal_perkuliahan',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/jadwal.png',
      video: '',
    },
  ],
  hackathons: [
    {
      title: 'Hackathon elevAite by Dicoding',
      dates: 'May 14 - June 14, 2025',
      location: 'Online, Indonesia',
      description:
        'My first ever Hackathon and surprisingly i won!, I developed a Web Application to prevent wild gambling and self support condition management based on AI.',
      image: '/elevaite.ico',
      mlh: '',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mcqeems/renaissance',
        },
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://renaissance.qeem.site',
        },
      ],
    },
  ],
} as const;
