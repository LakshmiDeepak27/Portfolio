interface BrushHeadingProps {
  label: string
}

export function BrushHeading({ label }: BrushHeadingProps) {
  return (
    <h3 className="relative inline-block">
      <svg
        className="brush-stroke pointer-events-none absolute -left-2.5 -top-1 h-[calc(100%+0.55rem)] w-[calc(100%+1.25rem)] -rotate-[0.6deg]"
        viewBox="0 0 160 32"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="brush-stroke-primary"
          d="M2,15 C1,9 8,5 20,6 C45,4 90,7 125,5 C142,4 157,7 158,14 C159,20 148,26 130,25 C85,27 40,24 18,26 C7,27 2,21 2,15 Z"
        />
        <path
          className="brush-stroke-secondary"
          d="M5,16 C4,11 10,9 22,10 C55,8 100,11 128,9 C140,8 152,10 153,15 C154,19 144,23 127,22 C90,24 45,21 20,23 C11,24 5,20 5,16 Z"
        />
      </svg>
      <span className="relative z-10 block px-0.5 font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </span>
    </h3>
  )
}
