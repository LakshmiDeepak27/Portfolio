import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '../components/icons/SocialIcons'
import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { getProjectBySlug } from '../data/projects'

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{title}</h2>
      <div className="mt-4 text-ink-subtle leading-relaxed">{children}</div>
    </section>
  )
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Header />
      <main className="section-padding min-h-dvh bg-surface">
        <div className="container-wide">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Projects
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="font-mono text-sm text-accent">{project.number}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-ink-muted">{project.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  Live Demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>

            <p className="mt-6 font-mono text-sm text-ink-muted">
              {project.technologies.join(' · ')}
            </p>
          </header>

          <div className="mt-16 max-w-3xl space-y-8">
            <DetailSection title="Overview">
              <p>{project.overview}</p>
            </DetailSection>

            <DetailSection title="Problem">
              <p>{project.problem}</p>
            </DetailSection>

            <DetailSection title="Goals">
              <ul className="list-inside list-disc space-y-2">
                {project.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Architecture">
              <p>{project.architecture}</p>
            </DetailSection>

            <DetailSection title="Technical Decisions">
              <ul className="list-inside list-disc space-y-2">
                {project.technicalDecisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Implementation">
              <p>{project.implementation}</p>
            </DetailSection>

            <DetailSection title="Challenges">
              <ul className="list-inside list-disc space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Results">
              <p>{project.results}</p>
            </DetailSection>

            <DetailSection title="What I Learned">
              <ul className="list-inside list-disc space-y-2">
                {project.learned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Future Improvements">
              <ul className="list-inside list-disc space-y-2">
                {project.futureImprovements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
