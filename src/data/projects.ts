export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  /** Still image shown while a video loads, and instead of it for reduced motion */
  poster?: string;
  alt: string;
}

export interface Project {
  title: string;
  type: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  links: ProjectLink[];
  media?: ProjectMedia;
}

export const projects: Project[] = [
  {
    title: 'ClueLess',
    type: 'Web · Game',
    tagline: 'Real-time multiplayer Clue-style web game',
    description:
      'Shipped in two weeks with a team of four. I built the Socket.io game and lobby, the friends system, the leaderboard and player stats, and Nodemailer email invites, with every game action validated server-side.',
    role: 'Project manager & lead full-stack developer',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Jest'],
    links: [
      { label: 'Live', url: 'https://cluelessgame.netlify.app/' },
      { label: 'GitHub', url: 'https://github.com/drainr/clueless' },
    ],
    media: {
      type: 'video',
      src: '/projects/clueless.mp4',
      poster: '/projects/clueless-poster.jpg',
      alt: 'ClueLess home page, a game lobby with a room code, the mansion game board, an interrogation, and the leaderboard',
    },
  },
  {
    title: 'Speciespy',
    type: 'Mobile',
    tagline: 'Citizen-science species identification app',
    description:
      'My senior thesis: a mobile app that identifies plants and animals from a photo through a dual-API pipeline (Pl@ntNet and Animal Detect), tags sightings with GPS, and builds a local community through a map, feed, and threaded discussions.',
    role: 'Solo developer (faculty-advised thesis)',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    links: [
      { label: 'Demo', url: 'https://youtu.be/LUuPpXVnVQs' },
      { label: 'GitHub', url: 'https://github.com/ibowers27/Speciespy' },
      { label: 'Thesis', url: 'https://digitalcommons.ncf.edu/theses_etds/6999/' },
    ],
    media: {
      type: 'video',
      src: '/projects/speciespy.mp4',
      poster: '/projects/speciespy-poster.jpg',
      alt: 'Speciespy identifying an eastern gray squirrel from a photo, then showing sightings on a map',
    },
  },
  {
    title: 'Manatee VR Simulation',
    type: 'VR · Game',
    tagline: 'VR conservation game for K–12 students',
    description:
      'A Unity VR simulation for mobile and Oculus about human threats to manatees. I built the entanglement and labored-breathing mechanics, night and "Manatee School" scenes, and the ending, and connected a Python + MongoDB data-collection backend for user testing. Presented at the 2025 Manatee Symposium.',
    role: 'Virtual Reality Software Engineer (EDAP)',
    tech: ['Unity', 'C#', 'Python', 'MongoDB'],
    links: [{ label: 'Project site', url: 'https://sites.google.com/ncf.edu/edap2025/home' }],
    media: {
      type: 'video',
      src: '/projects/manatee.mp4',
      poster: '/projects/manatee-poster.jpg',
      alt: 'Swimming as a manatee in the VR simulation, getting hit by a boat, finding an entangled friend, and the conservation tips at the end',
    },
  },
  {
    title: 'BanyanHire',
    type: 'Web',
    tagline: 'Campus job portal with role-based dashboards',
    description:
      'A job portal with seeker, recruiter, and admin roles. I built all three dashboards, the admin recruiter-approval workflow, a role-aware sidebar, and frontend and backend routing.',
    role: 'Project manager & lead full-stack developer',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    links: [
      { label: 'Live', url: 'https://banyanhire.netlify.app/' },
      { label: 'GitHub', url: 'https://github.com/drainr/banyanhire' },
    ],
    media: {
      type: 'video',
      src: '/projects/banyanhire.mp4',
      poster: '/projects/banyanhire-poster.jpg',
      alt: 'BanyanHire home page, job listings, the recruiter dashboard, job postings, and applicant review',
    },
  },
];
