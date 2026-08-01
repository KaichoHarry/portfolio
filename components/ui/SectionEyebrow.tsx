type SectionEyebrowProps = {
  label: string;
  className?: string;
};

export function SectionEyebrow({ label, className }: SectionEyebrowProps) {
  return (
    <div className={`mb-5 font-mono text-base text-accent ${className ?? ""}`}>
      &lt;{label} /&gt;
    </div>
  );
}
