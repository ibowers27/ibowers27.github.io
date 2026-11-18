export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'C++', 'MATLAB'],
  },
  {
    name: 'Web & Mobile',
    items: [
      'React',
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'Socket.io',
      'MongoDB',
      'Firebase',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Games & VR',
    items: ['Unity', 'Blender', 'Oculus'],
  },
  {
    name: 'Tools',
    items: ['Git & GitHub', 'GitHub Actions', 'Vite', 'Jest', 'ESLint', 'Prettier'],
  },
];
