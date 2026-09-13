export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Core',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design Fundamentals',
    ],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML & CSS', 'Tailwind CSS', 'Responsive Design', 'Accessibility'],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
]
