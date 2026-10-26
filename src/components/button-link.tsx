import type { ComponentProps } from "react";
import { cx } from "./tile";

const variants = {
  primary: "border-ink bg-accent text-ink shadow-brutal-sm press",
  secondary: "border-ink bg-white text-ink shadow-brutal-sm press",
  /** Dùng trên nền đen của ô liên hệ */
  inverse: "border-white text-white hover:bg-white hover:text-ink",
  inverseAccent: "border-white bg-accent text-ink",
} as const;

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: { variant?: keyof typeof variants } & ComponentProps<"a">) {
  return (
    <a
      className={cx(
        "inline-flex min-h-12 items-center rounded-[10px] border-[2.5px] px-5 font-extrabold no-underline transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
