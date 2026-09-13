import { timeline } from '../data/experience'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-b border-border bg-surface">
      <div className="container-wide">
        <SectionHeading number="04" title="Experience / Education" />

        <div className="space-y-0">
          {timeline.map((entry, index) => (
            <article
              key={`${entry.year}-${entry.title}`}
              className={`grid gap-4 border-t border-border py-8 sm:grid-cols-[100px_1fr] sm:gap-8 ${
                index === 0 ? 'border-t-0 pt-0' : ''
              }`}
            >
              <p className="font-mono text-sm font-medium text-accent">{entry.year}</p>
              <div>
                <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink-muted">{entry.organization}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-subtle">{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
