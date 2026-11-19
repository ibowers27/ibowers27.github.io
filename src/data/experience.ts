export interface ExperienceItem {
  title: string;
  org: string;
  dates: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'Virtual Reality Software Engineer',
    org: 'Environmental Discovery Awards Program (with New College of Florida)',
    dates: 'Jul – Aug 2025 · Apr – May 2026',
    points: [
      'Built core gameplay mechanics for a manatee-conservation VR simulation in Unity/C# and managed GitHub merges for the team.',
      'Returned in 2026 to verify per-session data tracking for new scenes, prepare Meta Quest 2/3 headsets for the user study, and hand off the project.',
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
    title: 'Virtual Reality Programmer & 3D Artist',
    org: 'WKU XR Research Lab',
    dates: 'Aug – Dec 2022',
    points: [
      "On a team of three, built an interactive VR tour of WKU's campus as it is today and as it was in 1906, teaching students about the university's history and the communities its expansion affected.",
      'Modeled campus buildings in Blender; our poster won 2nd place at the ACM Mid-Southeast Conference.',
    ],
  },
];
