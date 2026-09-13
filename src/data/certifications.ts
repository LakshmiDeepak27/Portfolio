const base = import.meta.env.BASE_URL

export interface Certification {
  id: string
  title: string
  issuer: string
  issuerLink?: string
  date: string
  recipient: string
  certificateNo?: string
  badge: string
  image: string
  description: string
  skills: string[]
  verificationText: string
}

export const certifications: Certification[] = [
  {
    id: 'servicenow-csa',
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    date: 'April 2026',
    recipient: 'Neeli Lakshmi Deepak',
    badge: 'Industry Certification',
    image: `${base}images/certifications/servicenow-csa.png`,
    description:
      'Validates professional competency in ServiceNow platform administration, user and role governance, workflow automation, and enterprise IT service management architecture.',
    skills: ['ServiceNow Admin', 'ITSM Workflows', 'Role Governance', 'Platform Automation'],
    verificationText: 'Certified System Administrator',
  },
  {
    id: 'academic-topper-9-74',
    title: 'Academic Achievement — Department Topper (9.74 CGPA)',
    issuer: 'Department of Computer Science and Engineering, DSATM',
    issuerLink: 'https://www.linkedin.com/in/cse-dept-dsatm-7089a3158/',
    date: 'Academic Year 2024–2025',
    recipient: 'Neeli Lakshmi Deepak',
    badge: 'Topper · 9.74 CGPA',
    image: `${base}images/certifications/dsatm-academic-topper-9-74.png`,
    description:
      'Awarded for outstanding academic performance and securing the position of Department Topper with a 9.74 CGPA during the 2024–2025 academic year at DSATM.',
    skills: ['Operating Systems', 'DBMS', 'Algorithms', 'Computer Networks'],
    verificationText: 'Official Academic Certificate',
  },
  {
    id: 'nptel-modern-cpp',
    title: 'Programming in Modern C++ — IIT Kharagpur',
    issuer: 'NPTEL & IIT Kharagpur (Funded by MoE, Govt. of India)',
    date: 'Jan–Apr 2026',
    recipient: 'Neeli Lakshmi Deepak',
    certificateNo: 'NPTEL26CS52S950201168',
    badge: 'Elite Certification',
    image: `${base}images/certifications/nptel-modern-cpp.png`,
    description:
      'Rigorous 12-week IIT Kharagpur curriculum completed with Elite distinction, covering modern C++17, STL containers, templates, RAII, and object-oriented architecture.',
    skills: ['Modern C++', 'STL', 'Templates', 'RAII & Memory', 'OOP'],
    verificationText: 'Elite Online Certification',
  },
  {
    id: 'hackerrank-sql-intermediate',
    title: 'SQL (Intermediate) Skill Certification',
    issuer: 'HackerRank',
    date: 'September 12, 2026',
    recipient: 'Neeli Lakshmi Deepak',
    certificateNo: 'ID: F7392C40E1D5',
    badge: 'Verified Assessment',
    image: `${base}images/certifications/hackerrank-sql-intermediate.png`,
    description:
      'Demonstrated advanced proficiency in complex multi-table joins, nested subqueries, grouping aggregations, and relational database querying on HackerRank.',
    skills: ['SQL', 'Complex Joins', 'Subqueries', 'Data Aggregations'],
    verificationText: 'Verified Skill Assessment',
  },
  {
    id: 'haccverse-2025',
    title: 'Certificate of Achievement — Second Place (HaccVerse ’25)',
    issuer: 'School of Computing & IT, REVA University (with REVA Nest & IEEE)',
    date: 'March 21–22, 2025',
    recipient: 'Neeli Lakshmi Deepak (Team Merge Conflict)',
    badge: '1st Runner-Up (120+ Teams)',
    image: `${base}images/certifications/hackverse25-certificate.png`,
    description:
      'Officially certified for securing 2nd Place in the national Web3 & Blockchain hackathon HaccVerse ’25 for building Plutus voice-based AI transaction agent.',
    skills: ['Web3 & Blockchain', 'AI Agents', 'Full-Stack Prototyping'],
    verificationText: 'Verified Hackathon Certificate',
  },
  {
    id: 'bytebattle-organizer-2025',
    title: 'Certificate of Appreciation — Organizer for "BYTE BATTLE"',
    issuer: 'Dept. of CSE (AI), Dayananda Sagar Academy of Technology & Management',
    date: 'October 23, 2025',
    recipient: 'Neeli Lakshmi Deepak',
    certificateNo: 'DSATM/CSE-AI/C/18',
    badge: 'Lead Organizer & Support',
    image: `${base}images/certifications/bytebattle-certificate.png`,
    description:
      'Recognized for contributing as an Organizer and Technical Support Lead for Byte Battle 2025 inter-college coding competition held in partnership with CodeChef.',
    skills: ['Contest Infrastructure', 'Technical Support', 'CodeChef Platform'],
    verificationText: 'Verified Certificate of Appreciation',
  },
]
