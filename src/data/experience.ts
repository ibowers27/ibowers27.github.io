export interface ExperienceItem {
  title: string;
  org: string;
  dates: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'VR Game Developer',
    org: 'New College of Florida & Environmental Discovery Awards Program',
    dates: 'Jul 2025 – May 2026',
    points: [
      'EDAP intern (summer 2025), then rehired as a research assistant to finish features and hand off the project.',
      'Built core gameplay mechanics in Unity/C# and managed GitHub merges for the team.',
    ],
  },
  {
    title: 'Teaching Assistant & Tutor',
    org: 'New College of Florida',
    dates: 'Aug 2024 – Dec 2025',
    points: [
      'Object-Oriented Programming TA: office hours, short lectures, and grading.',
      'Navigating AI TA and Intermediate Python tutor.',
    ],
  },
  {
    title: 'Hurricane Sentiment Analysis',
    org: 'Independent study, New College of Florida',
    dates: 'Jan 2025',
    points: [
      'Tracked Facebook sentiment before Hurricanes Debby, Helene, and Milton using VADER in Python and Matplotlib.',
    ],
  },
  {
    title: 'XR Lab Researcher',
    org: 'Western Kentucky University',
    dates: 'Aug – Dec 2022',
    points: [
      'Modeled campus buildings in Blender for a VR tour; poster won 2nd place at the ACM Mid-Southeast Conference.',
    ],
  },
];
