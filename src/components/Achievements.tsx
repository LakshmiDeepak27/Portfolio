import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { type Achievement, type AchievementImage, achievements } from '../data/achievements'
import { SectionHeading } from './SectionHeading'

interface GalleryCardProps {
  achievement: Achievement
  onOpenLightbox: (images: AchievementImage[], startIndex: number) => void
}

function FeaturedAchievementCard({ achievement, onOpenLightbox }: GalleryCardProps) {
  const images = achievement.images || []
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)

  const totalPhotos = images.length
  const currentImage = images[activePhotoIdx]

  const handleNextPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (totalPhotos > 0 ? (prev + 1) % totalPhotos : 0))
  }, [totalPhotos])

  const handlePrevPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (totalPhotos > 0 ? (prev - 1 + totalPhotos) % totalPhotos : 0))
  }, [totalPhotos])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-accent/50 sm:p-8 lg:p-10">
      {/* Top Accent Ribbon Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Narrative & Metrics */}
        <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-7">
          <div>
            {/* Badge & Date */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent">
                {achievement.id === 'hackverse-25' ? (
                  <Trophy size={14} className="text-accent" />
                ) : (
                  <Award size={14} className="text-accent" />
                )}
                {achievement.badge}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted">
                <Calendar size={13} />
                {achievement.date}
              </span>
              {achievement.id === 'hackverse-25' && (
                <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted">
                  <Users size={13} />
                  Team Merge Conflict
                </span>
              )}
            </div>

            {/* Title & Organization */}
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-accent sm:text-base">
              {achievement.organization}
            </p>

            {/* Highlight sentence */}
            <div className="mt-4 rounded-xl border-l-2 border-accent bg-surface-elevated/60 p-4">
              <p className="text-base font-semibold leading-relaxed text-ink">
                {achievement.highlight}
              </p>
            </div>

            {/* Narrative Story */}
            <div className="mt-5 whitespace-pre-line space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <p>{achievement.story}</p>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {achievement.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-surface-elevated p-3 text-center transition-transform hover:-translate-y-0.5"
                >
                  <p className="text-base font-bold text-ink sm:text-lg">{metric.value}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2 pt-4">
            {achievement.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-ink-subtle"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Photo Gallery */}
        <div className="flex flex-col lg:col-span-6 xl:col-span-5">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink">
                Event Highlights Gallery
              </span>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              {activePhotoIdx + 1} / {images.length}
            </span>
          </div>

          {/* Primary High-Resolution Display */}
          {currentImage && (
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-black/90 shadow-md">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay for Caption */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Top Right: Expand / Lightbox Button */}
              <button
                type="button"
                onClick={() => onOpenLightbox(images, activePhotoIdx)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
                aria-label="View fullscreen photo"
                title="Click to view fullscreen"
              >
                <Maximize2 size={16} />
              </button>

              {/* Nav Arrow Buttons */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-90 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-90 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Next photo"
              >
                <ChevronRight size={20} />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-black">
                  {currentImage.title}
                </div>
                <p className="mt-1.5 text-xs text-white/90 sm:text-sm line-clamp-2">
                  {currentImage.caption}
                </p>
              </div>
            </div>
          )}

          {/* Thumbnails Row */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {images.map((img, idx) => {
              const isActive = idx === activePhotoIdx
              return (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                    isActive
                      ? 'border-accent ring-2 ring-accent/30 scale-[1.02]'
                      : 'border-border/60 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Show ${img.title}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isActive ? 'bg-accent/10' : 'group-hover:bg-black/10'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Achievements() {
  const featuredItems = achievements.filter((a) => a.featured)
  const secondaryItems = achievements.filter((a) => !a.featured)

  const [lightboxImages, setLightboxImages] = useState<AchievementImage[]>([])
  const [lightboxIdx, setLightboxIdx] = useState<number>(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openLightbox = (images: AchievementImage[], startIndex: number) => {
    setLightboxImages(images)
    setLightboxIdx(startIndex)
    setIsLightboxOpen(true)
  }

  const handleLightboxNext = useCallback(() => {
    if (!lightboxImages.length) return
    setLightboxIdx((prev) => (prev + 1) % lightboxImages.length)
  }, [lightboxImages.length])

  const handleLightboxPrev = useCallback(() => {
    if (!lightboxImages.length) return
    setLightboxIdx((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
  }, [lightboxImages.length])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
      if (e.key === 'ArrowRight') handleLightboxNext()
      if (e.key === 'ArrowLeft') handleLightboxPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, handleLightboxNext, handleLightboxPrev])

  const currentLightboxImg = lightboxImages[lightboxIdx]

  return (
    <section id="achievements" className="section-padding border-b border-border bg-surface-elevated">
      <div className="container-wide">
        <SectionHeading number="05" title="Honors & Achievements" />

        {/* Featured Flagship Achievement Cards */}
        <div className="mt-8 space-y-12">
          {featuredItems.map((item) => (
            <FeaturedAchievementCard
              key={item.id}
              achievement={item}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* Other Notable Achievements Grid */}
        {secondaryItems.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {secondaryItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-accent">
                      <Award size={14} />
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">{item.year}</span>
                  </div>

                  <h4 className="mt-3 text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-ink-muted">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{item.highlight}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* High-Resolution Lightbox Modal */}
      {isLightboxOpen && currentLightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
            aria-label="Close fullscreen view"
          >
            <X size={24} />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleLightboxPrev()
            }}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/25"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleLightboxNext()
            }}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/25"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Content Container */}
          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightboxImg.src}
              alt={currentLightboxImg.title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 max-w-2xl text-center text-white">
              <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-black">
                {currentLightboxImg.title}
              </span>
              <p className="mt-2 text-sm text-neutral-200">{currentLightboxImg.caption}</p>
              <p className="mt-1 font-mono text-xs text-neutral-400">
                Photo {lightboxIdx + 1} of {lightboxImages.length} · Use arrow keys to navigate, Esc
                to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
