interface SectionHeadingProps {
  number: string
  title: string
  className?: string
}

export function SectionHeading({ number, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <p className="font-mono text-sm tracking-wider text-accent">{number}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-12 bg-border-strong" aria-hidden="true" />
    </div>
  )
}
