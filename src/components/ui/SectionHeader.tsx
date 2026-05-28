interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-16`}>
      {eyebrow && (
        <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? "text-[#080808]" : "text-white"}`}
        style={{ fontFamily: "Noto Serif JP, serif" }}
      >
        {title}
      </h2>
      <div className={`w-12 h-0.5 bg-[#CC2222] ${centered ? "mx-auto" : ""} mb-4`} />
      {subtitle && (
        <p className={`text-sm leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-600" : "text-white/50"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
