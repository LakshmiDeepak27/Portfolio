import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { navLinks, site } from '../config/site'
import { useAutoHideNav } from '../hooks/useAutoHideNav'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const visible = useAutoHideNav(menuOpen)
  const interactive = visible || menuOpen

  const goToMainPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const onHome = location.pathname === '/' || location.pathname === ''

    if (!onHome) {
      navigate('/', { state: { scrollToHero: true } })
      return
    }

    window.history.replaceState(null, '', `${import.meta.env.BASE_URL}`)

    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed left-1/2 top-0 z-40 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
          visible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-[calc(100%+1rem)] pointer-events-none opacity-0'
        }`}
        aria-hidden={!interactive}
      >
        <div
          className="
            flex
            h-12
            w-[min(94vw,980px)]
            items-center
            justify-between
            rounded-full
            border
            border-border
            bg-surface
            px-6
            shadow-sm
            sm:px-8
            lg:px-9
          "
        >
          {/* Brand */}
          <Link
            to="/"
            onClick={goToMainPage}
            tabIndex={interactive ? 0 : -1}
            className="
              shrink-0
              text-sm
              font-semibold
              tracking-tight
              text-ink
              transition-opacity
              duration-200
              hover:opacity-60
              sm:text-base
            "
          >
            {site.name}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-5 xl:gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={interactive ? 0 : -1}
                className="
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-ink-muted
                  transition-colors
                  duration-200
                  hover:text-ink
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="ml-4 flex shrink-0 items-center gap-1">
            <ThemeToggle
              tabIndex={interactive ? 0 : -1}
              className="
                rounded-full
                text-ink-muted
                transition-colors
                duration-200
                hover:bg-surface-muted
                hover:text-ink
              "
            />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              tabIndex={interactive ? 0 : -1}
              className="
                rounded-full
                p-2
                text-ink-muted
                transition-colors
                duration-200
                hover:bg-surface-muted
                hover:text-ink
                lg:hidden
              "
            >
              <Menu size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}