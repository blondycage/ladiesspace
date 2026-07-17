type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.16em] text-burgundy ${className}`}
    >
      {children}
    </p>
  );
}
