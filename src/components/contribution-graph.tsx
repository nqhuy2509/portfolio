const WEEKS = 16;
const LEVEL_OPACITY = [1, 0.3, 0.55, 0.8, 1];

// Dữ liệu minh hoạ cố định — thay bằng dữ liệu GitHub thật khi cần.
const levels = Array.from({ length: WEEKS * 7 }, (_, i) => {
  const v = (i * 37 + (i % 7) * 11 + Math.floor(i / 7) * 5) % 10;
  return v < 3 ? 0 : v < 6 ? 1 : v < 8 ? 2 : v < 9 ? 3 : 4;
});

export function ContributionGraph() {
  return (
    <div
      aria-hidden="true"
      className="grid auto-cols-[10px] grid-flow-col grid-rows-[repeat(7,10px)] gap-[3px]"
    >
      {levels.map((level, i) => (
        <span
          key={i}
          className={level === 0 ? "rounded-[2px] bg-ink-faint" : "rounded-[2px] bg-ink"}
          style={{ opacity: LEVEL_OPACITY[level] }}
        />
      ))}
    </div>
  );
}
