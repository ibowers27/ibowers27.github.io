export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  type: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  links: ProjectLink[];
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
  },
  {
    title: 'Manatee VR Simulation',
    type: 'VR · Game',
    tagline: 'VR conservation game for K–12 students',
    description:
      'A Unity VR simulation for mobile and Oculus about human threats to manatees. I built the entanglement and labored-breathing mechanics, night and "Manatee School" scenes, and the ending, and connected a Python + MongoDB data-collection backend for user testing. Presented at the 2025 Manatee Symposium.',
    role: 'VR developer (EDAP intern & research assistant)',
    tech: ['Unity', 'C#', 'Python', 'MongoDB'],
    links: [{ label: 'Project site', url: 'https://sites.google.com/ncf.edu/edap2025/home' }],
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
  },
];
