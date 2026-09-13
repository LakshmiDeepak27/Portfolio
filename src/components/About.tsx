import { site } from '../config/site'
import { SectionHeading } from './SectionHeading'

const highlights = [
  {
    label: 'Engineering mindset',
    text: 'I approach problems by understanding constraints first, then designing solutions that are simple to reason about and easy to extend.',
  },
  {
    label: 'Problem solving',
    text: 'Strong foundation in algorithms and data structures, applied through competitive programming and real project constraints.',
  },
  {
    label: 'Building software',
    text: 'From low-level C++ systems to polished React interfaces — I care about the full stack of quality, not just making things work.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding border-b border-border bg-surface-elevated">
      <div className="container-wide">
        <SectionHeading number="01" title="About" />

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_460px] xl:gap-16">
          <div className="order-2 lg:order-1">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
              I&apos;m a software developer focused on writing code that lasts — readable,
              tested where it matters, and structured for the next person who reads it. My work
              spans systems programming, web applications, and the engineering decisions that connect
              them.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-ink-subtle">
              I&apos;m particularly interested in how software is designed at the boundary between
              user experience and technical architecture. Whether it&apos;s modeling game logic in
              C++ or shipping a React interface, I aim for the same standard: intentional design,
              clear communication, and reliable execution.
            </p>

            <div className="mt-12 space-y-8 border-t border-border pt-12">
              {highlights.map((item) => (
                <div key={item.label} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {item.label}
                  </h3>
                  <p className="leading-relaxed text-ink-subtle">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <figure className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative aspect-square overflow-hidden rounded-sm bg-white shadow-[0_24px_48px_-24px_rgba(28,25,23,0.2)] ring-1 ring-border dark:bg-[#0a0a09] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
              <img
                src={site.aboutPortraitDark}
                alt={`${site.fullName} — developer portrait with hand-drawn annotations about building software`}
                className="theme-image-fade absolute inset-0 h-full w-full object-contain object-center opacity-100 dark:opacity-0"
                width={460}
                height={460}
                loading="lazy"
              />
              <img
                src={site.aboutPortraitLight}
                alt={`${site.fullName} — developer portrait with hand-drawn annotations about building software`}
                className="theme-image-fade absolute inset-0 h-full w-full object-contain object-center opacity-0 dark:opacity-100"
                width={460}
                height={460}
                loading="lazy"
                aria-hidden="true"
              />
            </div>
            <figcaption className="mt-3 font-mono text-xs text-ink-subtle">
              building things, one commit at a time
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
