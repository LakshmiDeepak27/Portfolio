import { getFeaturedProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="section-padding border-b border-border bg-surface-elevated">
      <div className="container-wide">
        <SectionHeading number="03" title="Selected Projects" />

        <div className="space-y-4">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
