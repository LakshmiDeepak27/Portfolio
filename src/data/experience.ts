export interface TimelineEntry {
  year: string
  title: string
  organization: string
  description: string
  type: 'work' | 'education' | 'achievement'
}

export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    title: 'Software Engineering Focus',
    organization: 'Independent & Academic Projects',
    description:
      'Building full-stack and systems-oriented projects with emphasis on clean architecture, performance, and maintainable code.',
    type: 'work',
  },
  {
    year: '2025',
    title: 'Bachelor of Technology — Computer Science',
    organization: 'Dayananda Sagar Academy of Technology and Management', // TODO: Replace
    description:
      'Coursework in algorithms, databases, operating systems, and software engineering. Active in technical projects and competitive programming.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Technical Foundations',
    organization: 'Self-directed Learning',
    description:
      'Strengthened fundamentals in C++, Java, and web development through structured practice and project-based learning.',
    type: 'education',
  },
]
