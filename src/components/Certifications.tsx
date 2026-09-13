import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { type Certification, certifications } from '../data/certifications'
import { SectionHeading } from './SectionHeading'

export function Certifications() {
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null)

  const activeCert: Certification | null =
    activeModalIdx !== null ? certifications[activeModalIdx] : null

  const handleNextCert = useCallback(() => {
    if (activeModalIdx === null) return
    setActiveModalIdx((prev) => (prev! + 1) % certifications.length)
  }, [activeModalIdx])

  const handlePrevCert = useCallback(() => {
    if (activeModalIdx === null) return
    setActiveModalIdx((prev) => (prev! - 1 + certifications.length) % certifications.length)
  }, [activeModalIdx])

  useEffect(() => {
    if (activeModalIdx === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalIdx(null)
      if (e.key === 'ArrowRight') handleNextCert()
      if (e.key === 'ArrowLeft') handlePrevCert()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModalIdx, handleNextCert, handlePrevCert])

  return (
    <section id="certifications" className="section-padding border-b border-border bg-surface">
      <div className="container-wide">
        <SectionHeading number="06" title="Licenses & Certifications" />

        <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
          Verified academic and professional credentials demonstrating mastery in enterprise
          systems, modern algorithms, data querying, and engineering excellence.
        </p>

        {/* Responsive Grid of Certificates */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md sm:p-6"
            >
              <div>
                {/* Certificate Frame Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border-strong/60 bg-surface-muted shadow-inner">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Inspect button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => setActiveModalIdx(index)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-ink shadow-lg transition-transform hover:scale-105"
                      aria-label={`Inspect ${cert.title} in high resolution`}
                    >
                      <Maximize2 size={14} />
                      Inspect Certificate
                    </button>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute left-2.5 top-2.5 rounded-full border border-accent/40 bg-surface/90 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent shadow-sm backdrop-blur-sm">
                    {cert.badge}
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent">
                    <ShieldCheck size={14} />
                    {cert.verificationText}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2.5 text-xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer with optional external link */}
                <div className="mt-1 flex items-center gap-1 text-sm font-medium text-ink-muted">
                  {cert.issuerLink ? (
                    <a
                      href={cert.issuerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {cert.issuer}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{cert.issuer}</span>
                  )}
                </div>

                {/* Certificate Number / Recipient tag if present */}
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                  <span className="font-mono text-[11px] text-ink-subtle">
                    Recipient: <strong className="text-ink font-medium">{cert.recipient}</strong>
                  </span>
                  {cert.certificateNo && (
                    <span className="rounded bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-ink-subtle">
                      {cert.certificateNo}
                    </span>
                  )}
                </div>

                {/* Crisp 1-2 sentence description */}
                <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{cert.description}</p>
              </div>

              {/* Skills Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 rounded bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                  >
                    <CheckCircle2 size={11} className="text-accent" />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* High-Resolution Lightbox Modal with Next/Prev Controls */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Inspector"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setActiveModalIdx(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveModalIdx(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
            aria-label="Close certificate inspector"
          >
            <X size={24} />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevCert()
            }}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/25"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleNextCert()
            }}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/25"
            aria-label="Next certificate"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Content */}
          <div
            className="relative flex max-h-[92vh] max-w-4xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-3 max-w-2xl text-center text-white">
              <h4 className="text-base font-semibold">{activeCert.title}</h4>
              <p className="mt-0.5 text-xs text-neutral-300">
                {activeCert.issuer} · {activeCert.date}
              </p>
              <p className="mt-1 font-mono text-[11px] text-neutral-400">
                Certificate {activeModalIdx! + 1} of {certifications.length} · Use arrow keys to
                navigate, Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
