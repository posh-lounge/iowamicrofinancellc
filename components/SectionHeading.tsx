export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow mb-3 ${
          light ? "text-gold-sunrise" : "text-teal-deep"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] ${
          light ? "text-cloud" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15.5px] leading-relaxed ${
            light ? "text-cloud/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
