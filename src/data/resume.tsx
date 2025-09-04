import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: "Mustaqim Nawahhudi Ma'arif",
  initials: 'mcqeems',
  url: 'https://qeem.site',
  location: 'Karawang',
  locationLink: 'https://www.google.com/maps/place/karawang',
  description: `I'm a passionate Computer Science student with a love for building innovative solutions.`,
  summary: `I'm a passionate Computer Science student with a love for building innovative solutions and exploring the intersection of software development, networking, and cloud technologies. My journey in tech has been driven by curiosity, problem-solving, and a deep fascination with Web Development and Cloud Computing.

  As an aspiring Software Engineer, I enjoy transforming ideas into functional, user-friendly applications. From designing sleek front-end interfaces to architecting efficient back-end systems, I thrive on creating seamless digital experiences. My hands-on experience with Web Development has allowed me to develop responsive and interactive web apps, and I'm always eager to dive deeper into the ever-evolving world of Software Engineering.`,
  avatarUrl: '/me.webp',
  skills: [
    'React.js',
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
    'Prisma',
    'MongoDB',
    'MySql',
    'Odoo',
    'WordPress',
    'FastAPI',
    'Elysia.js',
    'PostGre',
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
      company: 'Freelance',
      href: 'https://qeem.site/',
      badges: [],
      location: 'Remote',
      title: 'Software Developer',
      logoUrl: '/logo.webp',
      start: 'June 2025',
      end: 'Now',
      description: `Taking on freelance work when available, and always creating personal projects in the meantime.`,
    },
    {
      company: 'PPTIK',
      href: 'https://pptik.unida.gontor.ac.id/',
      badges: [],
      location: 'Office',
      title: 'Software & Network Engineer',
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
      title: 'EarnMore',
      href: 'https://earnmore.my.id',
      dates: 'August 2025 - September 2025',
      active: true,
      description: 'A comprehensive LMS built with Odoo as the main system to teach students at my university.',
      technologies: ['Odoo', 'Python', 'Flask', 'Postgre'],
      links: [
        {
          type: 'Website',
          href: 'https://earnmore.my.id',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/projects/earnmore.webp',
      video: '',
    },
    {
      title: 'Jurumiyah',
      href: 'https://jurumiyah.id',
      dates: 'June 2025 - September 2025',
      active: true,
      description: 'A learning platform for jurumiyah or nahwu.',
      technologies: ['Astro', 'MeiliSearch'],
      links: [
        {
          type: 'Website',
          href: 'https://jurumiyah.id',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/projects/jurumiyah.webp',
      video: '',
    },
    {
      title: 'Jagatara',
      href: 'https://jagatara.my.id',
      dates: 'August 2025 - September 2025',
      active: true,
      description: 'Jagatara is an online learning based platform to learn indonesian traditional language.',
      technologies: ['React.js', 'Typescript', 'MySql', 'TailwindCSS', 'Golang'],
      links: [
        {
          type: 'Website',
          href: 'https://jagatara.my.id',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/projects/jagatara.webp',
      video: '',
    },
    {
      title: 'Podahoras',
      href: 'https://podahoras.id',
      dates: 'July 2025 - August 2025',
      active: true,
      description: 'Podahoras is a website provided to teach how to learn Batak especially Aksara Batak.',
      technologies: ['React.js', 'Typescript', 'MySql', 'TailwindCSS', 'Golang'],
      links: [
        {
          type: 'Website',
          href: 'https://podahoras.id',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mcqeems/aksara_batak',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/aksara-batak.webp',
      video: '',
    },
  ],
  hackathons: [
    {
      title: 'Gemastik',
      dates: '🟢 Ongoing',
      location: 'Online, Indonesia',
      description: 'A spectacular hackathons for the best of the best, its still ongoing so wish me luck!',
      image: '/hackathons/gemastik.png',
      mlh: '',
      links: [
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://jagatara.my.id',
        },
      ],
    },
    {
      title: 'PTN X elevAite',
      dates: 'August 25, 2025',
      location: 'Online, Indonesia',
      description:
        'The continuation of the previous hackathon, i got elected for the finalist but still havent managed to win yet.',
      image: '/hackathons/ptn.png',
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
    {
      title: 'Aksara Batak by Domainesia',
      dates: 'July 16 - August 24, 2025',
      location: 'Online, Indonesia',
      description:
        'I built a learning platform for Aksara Batak, I got nominated but i didnt won but its okay i got alot of experience building this complex app.',
      image: '/hackathons/domainesia.svg',
      mlh: '',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mcqeems/aksara_batak',
        },
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://podahoras.id',
        },
      ],
    },
    {
      title: 'Hackathon elevAite by Dicoding',
      dates: 'May 14 - June 14, 2025',
      location: 'Online, Indonesia',
      description:
        'My first ever Hackathon and surprisingly i won!, I developed a Web Application to prevent wild gambling and self support condition management based on AI.',
      image: '/hackathons/elevaite.ico',
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
