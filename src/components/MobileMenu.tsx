import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { mobileMenuLinks, site } from '../config/site'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './icons/SocialIcons'
import { ThemeToggle } from './ThemeToggle'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousFocus = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-surface-elevated shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="font-semibold tracking-tight text-ink">{site.name}</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {mobileMenuLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...('external' in link && link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={onClose}
                  className="block rounded-md px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-ink-muted">Theme</span>
            <ThemeToggle />
          </div>
          <div className="flex gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LeetCode profile"
            >
              <LeetCodeIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
