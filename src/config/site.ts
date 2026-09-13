const base = import.meta.env.BASE_URL

export const site = {
  name: 'Deepak',
  fullName: 'Neeli Lakshmi Deepak',
  title: 'Software Developer',
  tagline: 'Building reliable software with clear architecture and thoughtful engineering.',
  email: 'lakshmideepakneeli317@gmail.com', 
  github: 'https://github.com/LakshmiDeepak27', 
  linkedin: 'https://www.linkedin.com/in/deepak-neeli/', 
  leetcode: 'https://leetcode.com/u/neeli_lakshmi_deepak_27/',
  resumePath: `${base}resume.pdf`,
  heroPortrait: `${base}images/portrait-hero.png`,
  aboutPortraitLight: `${base}images/portrait-about-light.png`,
  aboutPortraitDark: `${base}images/portrait-about-dark.png`,
  heroBgLight: `${base}images/hero-bg-light.png`,
  heroBgDark: `${base}images/hero-bg-dark.png`,
  contactImageLight: `${base}images/contact-light.png`,
  contactImageDark: `${base}images/contact-dark.png`,
} as const

const home = base

export const navLinks = [
  { label: 'Home', href: `${home}#home` },
  { label: 'About', href: `${home}#about` },
  { label: 'Projects', href: `${home}#projects` },
  { label: 'Experience', href: `${home}#experience` },
  { label: 'Achievements', href: `${home}#achievements` },
  { label: 'Certifications', href: `${home}#certifications` },
  { label: 'Contact', href: `${home}#contact` },
] as const

export const mobileMenuLinks = [
  { label: 'About', href: `${home}#about` },
  { label: 'Projects', href: `${home}#projects` },
  { label: 'Experience', href: `${home}#experience` },
  { label: 'Skills', href: `${home}#skills` },
  { label: 'Achievements', href: `${home}#achievements` },
  { label: 'Certifications', href: `${home}#certifications` },
  { label: 'Resume', href: site.resumePath, external: true },
  { label: 'Contact', href: `${home}#contact` },
  { label: 'GitHub', href: site.github, external: true },
  { label: 'LinkedIn', href: site.linkedin, external: true },
  { label: 'LeetCode', href: site.leetcode, external: true },
] as const
