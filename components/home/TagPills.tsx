const TAGS = ["UX/UI", "Product", "0→1", "AI", "Healthtech"];

export default function TagPills() {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
      {TAGS.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
