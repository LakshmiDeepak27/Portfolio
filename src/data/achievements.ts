const base = import.meta.env.BASE_URL

export interface AchievementImage {
  src: string
  caption: string
  title: string
}

export interface AchievementMetric {
  label: string
  value: string
}

export interface Achievement {
  id: string
  title: string
  badge: string
  award: string
  event: string
  organization: string
  year: string
  date: string
  highlight: string
  story: string
  metrics: AchievementMetric[]
  tags: string[]
  images?: AchievementImage[]
  featured?: boolean
}

export const achievements: Achievement[] = [
  {
    id: 'hackverse-25',
    title: 'Second Place — HackVerse ’25 National Hackathon (120+ Teams)',
    badge: '1st Runner-Up · ₹12,000 Prize',
    award: '1st Runner-Up (Second Place)',
    event: 'HaccVerse ’25 Web3 & Blockchain Hackathon',
    organization: 'School of Computing & IT, REVA University in assoc. with REVA Nest & IEEE',
    year: '2025',
    date: 'March 21–22, 2025',
    highlight:
      'Built Plutus, a voice-based AI agent for secure blockchain transactions, finishing second among 120+ competing teams.',
    story:
      'Super happy to share that our team won 1st Runner-Up at HaccVerse 25, a Web3 & Blockchain hackathon held at REVA University on March 21–22, 2025!\n\nThis was my first hackathon, and it turned out to be an amazing experience — full of learning, late nights, and great teamwork.\n\n We built Plutus, a simple and smart voice-based blockchain assistant. You can just speak or type what you want to do — like sending crypto — and it handles everything, even gas fee calculations!',
    metrics: [
      { label: 'Placement', value: '2nd Place (1st Runner-Up)' },
      { label: 'Teams Competed', value: '120+ Teams' },
      { label: 'Cash Prize', value: '₹12,000 Award' },
      { label: 'Format', value: '24-Hour Hackathon' },
    ],
    tags: [
      'Voice-based AI Agent',
      'Plutus',
      'Web3 & Blockchain',
      'Smart Gas Calculation',
      'Team Merge Conflict',
    ],
    featured: true,
    images: [
      {
        src: `${base}images/achievements/hackverse25-stage-award.jpg`,
        title: 'Stage Award Ceremony',
        caption:
          'Receiving 1st Runner-Up award trophy and ₹12,000 cash cheque on stage with university directors and faculty.',
      },
      {
        src: `${base}images/achievements/hackverse25-pitching-demo.jpg`,
        title: 'Live Pitch & Judging Demo',
        caption:
          'Demonstrating Plutus voice-driven transaction workflows and contract execution to the hackathon evaluation panel.',
      },
      {
        src: `${base}images/achievements/hackverse25-team-merge-conflict.jpg`,
        title: 'Team "Merge Conflict"',
        caption:
          'The four-member team standing proudly after the overnight build and presentation rounds.',
      },
      {
        src: `${base}images/achievements/hackverse25-hackathon-venue.jpg`,
        title: 'Hackathon Arena',
        caption:
          'The buzzing central atrium at REVA University with 120+ competitive teams hacking simultaneously.',
      },
    ],
  },
  {
    id: 'byte-battle-2025',
    title: 'Lead Organizer & Technical Support — BYTE BATTLE 2025',
    badge: 'Lead Organizer · CodeChef Partner',
    award: 'Certificate of Appreciation & Organizing Lead',
    event: 'Byte Battle 2025 Inter-College Coding Contest',
    organization: 'Dept. of CSE (Artificial Intelligence), DSATM in partnership with CodeChef',
    year: '2025',
    date: 'October 23, 2025',
    highlight:
      'Organized and engineered technical infrastructure, platform coordination, and contest testing for Byte Battle inter-college coding competition.',
    story:
      'Spearheaded the organization and technical support for BYTE BATTLE 2025 at Dayananda Sagar Academy of Technology and Management (DSATM).\n\nA day packed with coding, creativity, and fierce algorithmic competition! Students put their skills to the test through multiple rigorous problem-solving rounds, demonstrating extraordinary talent and competitive programming mastery.',
    metrics: [
      { label: 'Role', value: 'Lead Organizer' },
      { label: 'Department', value: 'CSE DSATM' },
      { label: 'Partner', value: 'CodeChef' },
      { label: 'Event Type', value: 'Inter-College Contest' },
    ],
    tags: [
      'Event Organizer',
      'Technical Support',
      'CodeChef',
      'Competitive Programming',
      'DSATM Campus',
    ],
    featured: true,
    images: [
      {
        src: `${base}images/achievements/bytebattle-poster.png`,
        title: 'Organizing Committee',
        caption:
          'Byte Battle 2025 organizing team and faculty coordinators at DSATM following the successful competition.',
      },
      {
        src: `${base}images/achievements/bytebattle-stage-awards.png`,
        title: 'Prize Distribution Ceremony',
        caption:
          'Presenting awards and certificates to contest winners on stage alongside professors and department heads.',
      },
      {
        src: `${base}images/achievements/bytebattle-contest-arena.jpg`,
        title: 'Contest Arena & Labs',
        caption:
          'Computer laboratory packed with inter-college participants tackling algorithmic challenges in timed rounds.',
      },
      {
        src: `${base}images/achievements/bytebattle-badge.png`,
        title: 'Official Organizer Badge & Pin',
        caption:
          'Official Byte Battle / CodeChef Technical Support credential badge and event medallion.',
      },
    ],
  },
  {
    id: 'competitive-programming',
    title: 'Algorithmic Problem Solving & LeetCode Milestone',
    badge: 'Consistent Problem Solver',
    award: '250+ Problems Solved',
    event: 'Competitive Programming & Data Structures',
    organization: 'LeetCode & Problem-Solving Platforms',
    year: '2025 – 2026',
    date: 'Ongoing',
    highlight:
      'Engineered optimized solutions across Dynamic Programming, Graphs, Trees, and Object-Oriented Design in C++ and Java.',
    story:
      'Committed daily practice to master algorithmic thinking, memory bounds, and time complexity tradeoffs. Solved hundreds of challenges with emphasis on clean syntax and reusable algorithmic patterns.',
    metrics: [
      { label: 'Problems Solved', value: '250+ DSA Problems' },
      { label: 'Core Language', value: 'C++ / Java' },
      { label: 'Domains', value: 'DP, Graphs, Trees' },
    ],
    tags: ['Algorithms', 'Data Structures', 'C++ STL', 'Optimization'],
    featured: false,
  }
]
