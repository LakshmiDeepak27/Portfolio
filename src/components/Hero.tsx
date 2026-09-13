import { ArrowUpRight, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './icons/SocialIcons'
import { site } from '../config/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden border-b border-border bg-surface"
      aria-label="Introduction"
    >
      {/* Theme-aware doodle background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={site.heroBgLight}
          alt=""
          className="theme-image-fade absolute inset-0 h-full w-full object-cover object-center opacity-[0.55] dark:opacity-0"
        />
        <img
          src={site.heroBgDark}
          alt=""
          className="theme-image-fade absolute inset-0 h-full w-full object-cover object-center opacity-0 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-surface/85 dark:bg-surface/78" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-dvh max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-24 xl:py-20">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="font-mono text-sm tracking-wide text-accent">Hi, I&apos;m {site.fullName}</p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.fullName}
          </h1>

          <p className="mt-3 text-xl font-medium text-ink-muted sm:text-2xl">{site.title}</p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-subtle sm:text-lg">
            I design and build software with a focus on clarity, performance, and maintainable
            architecture. Currently exploring systems programming, full-stack development, and
            product-minded engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}#projects`}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-ink/90"
            >
              View Projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface-elevated px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/20 hover:bg-surface-muted"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={25} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={25} />
            </a>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
              aria-label="LeetCode profile"
            >
              <LeetCodeIcon size={25} />
            </a>
          </div>
        </div>

        <div className="order-1 flex items-end justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-sm bg-surface-muted/80 lg:-inset-6"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-sm border border-border bg-surface-muted">
              <img
                src={site.heroPortrait}
                alt={`Portrait of ${site.fullName}, software developer`}
                className="aspect-[4/5] w-full object-cover object-top"
                width={640}
                height={800}
                fetchPriority="high"
              />
            </div>
            <p
              className="pointer-events-none absolute -bottom-2 left-0 hidden select-none font-mono text-[4.5rem] font-medium leading-none tracking-tighter text-ink/[0.04] lg:block xl:text-[5.5rem]"
              aria-hidden="true"
            >
              {site.fullName.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
