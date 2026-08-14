type Props = {
  className?: string;
};

export function FloralDecoration({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-40 ${className}`}
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M20 160C65 132 70 88 151 25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M61 119C40 109 34 94 42 79C58 84 67 98 61 119Z" fill="currentColor" />
      <path d="M92 86C77 69 78 52 93 43C106 55 106 72 92 86Z" fill="currentColor" />
      <path d="M121 60C122 42 134 31 149 34C151 49 140 59 121 60Z" fill="currentColor" />
      <path d="M52 132C69 130 80 139 79 154C64 158 54 149 52 132Z" fill="currentColor" />
    </svg>
  );
}
