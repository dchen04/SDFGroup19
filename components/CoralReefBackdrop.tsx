type Stack = { x: number; count: number; rx: number; color: string; jitter?: number };

const STACKS: Stack[] = [
  { x: 130,  count: 7, rx: 58, color: "#8db8b6" }, // teal
  { x: 290,  count: 5, rx: 46, color: "#d4a5b0" }, // dusty pink
  { x: 440,  count: 9, rx: 52, color: "#d8c89e" }, // pale gold
  { x: 615,  count: 4, rx: 72, color: "#abcfd3" }, // aqua
  { x: 780,  count: 8, rx: 48, color: "#e0a89a" }, // soft coral
  { x: 940,  count: 5, rx: 56, color: "#aac3aa" }, // sage
  { x: 1090, count: 7, rx: 42, color: "#b8b0c7" }, // lavender
];

const BASE_Y = 575;
const GAP = 22;

export default function CoralReefBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full opacity-[0.10]"
      >
        {STACKS.map((s, si) => (
          <g key={si}>
            {Array.from({ length: s.count }).map((_, i) => {
              const cy = BASE_Y - i * GAP;
              const rx = s.rx * (1 - i * 0.04);
              const ry = rx * 0.28;
              const cx = s.x + Math.sin(i * 0.7 + si) * 4;
              return (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy}
                  rx={rx}
                  ry={ry}
                  fill={s.color}
                  stroke={s.color}
                  strokeOpacity={0.55}
                  strokeWidth={1}
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
