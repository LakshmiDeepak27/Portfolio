import { skillGroups } from '../data/skills'
import { BrushHeading } from './BrushHeading'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-padding border-b border-border bg-surface">
      <div className="container-wide">
        <SectionHeading number="02" title="Engineering / Skills" />

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <BrushHeading label={group.category} />
              <ul className="mt-4 space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-border py-2 text-ink-muted last:border-b-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
