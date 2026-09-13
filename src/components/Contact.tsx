import { ArrowUpRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './icons/SocialIcons'
import { site } from '../config/site'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section-padding border-b border-border bg-surface">
      <div className="container-wide">
        <SectionHeading number="07" title="Let's Build Something" />

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_460px] xl:gap-16">
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
              I&apos;m open to internships, collaborations, and conversations about software
              engineering. The best way to reach me is email or LinkedIn.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-ink transition-colors hover:text-accent"
              >
                <Mail size={18} className="text-ink-muted group-hover:text-accent" aria-hidden="true" />
                <span className="font-medium">{site.email}</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-ink transition-colors hover:text-accent"
              >
                <LinkedInIcon size={18} className="text-ink-muted group-hover:text-accent" />
                <span className="font-medium">LinkedIn</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <a
                href={site.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-ink transition-colors hover:text-accent"
              >
                <LeetCodeIcon size={18} className="text-ink-muted group-hover:text-accent" />
                <span className="font-medium">LeetCode</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-ink transition-colors hover:text-accent"
              >
                <GitHubIcon size={18} className="text-ink-muted group-hover:text-accent" />
                <span className="font-medium">GitHub</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-ink/90"
            >
              Get in Touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <figure className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-muted ring-1 ring-border sm:aspect-square">
              <img
                src={site.contactImageLight}
                alt={`${site.fullName} at his workspace — illustration for contact section`}
                className="theme-image-fade absolute inset-0 h-full w-full object-cover object-center opacity-100 dark:opacity-0"
                width={460}
                height={575}
                loading="lazy"
              />
              <img
                src={site.contactImageDark}
                alt={`${site.fullName} at his workspace — illustration for contact section`}
                className="theme-image-fade absolute inset-0 h-full w-full object-cover object-center opacity-0 dark:opacity-100"
                width={460}
                height={575}
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
