import type { ComponentProps, ElementType, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const tones = {
  white: "bg-white",
  accent: "bg-accent",
  blue: "bg-blue",
  pink: "bg-pink",
  green: "bg-green",
  ink: "bg-ink text-white",
} as const;

export type TileTone = keyof typeof tones;

type TileStyle = {
  tone?: TileTone;
  /** Mặc định là bóng đen; ô liên hệ dùng bóng màu nhấn */
  shadow?: string;
};

function tileClass({ tone = "white", shadow = "shadow-brutal" }: TileStyle) {
  return cx(
    "flex flex-col overflow-hidden rounded-[14px] border-[2.5px] border-ink",
    tones[tone],
    shadow,
  );
}

export function Tile({
  tone,
  shadow,
  className,
  ...props
}: TileStyle & ComponentProps<"div">) {
  return <div className={cx(tileClass({ tone, shadow }), className)} {...props} />;
}

export function TileLink({
  tone,
  shadow,
  className,
  ...props
}: TileStyle & ComponentProps<"a">) {
  return (
    <a
      className={cx(tileClass({ tone, shadow }), "lift no-underline", className)}
      {...props}
    />
  );
}

export function TileLabel({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cx(
        "m-0 font-mono text-xs font-bold uppercase tracking-[0.04em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
