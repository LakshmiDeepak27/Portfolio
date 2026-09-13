import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './icons/SocialIcons'
import { site } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-padding bg-surface-elevated">
      <div className="container-wide">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-ink">{site.fullName}</p>
            <p className="mt-1 text-sm text-ink-muted">{site.title}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={18} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-8 font-mono text-xs text-ink-subtle">
          © {year} {site.fullName}
        </p>
      </div>
    </footer>
  )
}
