import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './icons/SocialIcons'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  reversed?: boolean
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <article
      className={`grid gap-8 border-t border-border pt-12 md:grid-cols-[80px_1fr] md:gap-12 ${
        reversed ? 'md:[&>div:last-child]:md:col-start-2' : ''
      }`}
    >
      <p className="font-mono text-2xl font-medium text-ink/20 md:text-3xl">{project.number}</p>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-lg text-ink-muted">{project.tagline}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Problem</h4>
            <p className="mt-2 leading-relaxed text-ink-subtle">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Approach</h4>
            <p className="mt-2 leading-relaxed text-ink-subtle">{project.approach}</p>
          </div>
        </div>

        <p className="mt-6 font-mono text-sm text-ink-muted">
          {project.technologies.join(' · ')}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            View Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              Live Demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
