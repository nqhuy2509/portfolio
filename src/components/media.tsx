import Image from "next/image";
import { cx } from "./tile";

/**
 * Hiển thị ảnh nếu có `src`, nếu chưa có thì hiện ô giữ chỗ gạch chéo kèm nhãn.
 */
export function Media({
  src,
  alt,
  label,
  sizes,
  className,
}: {
  src?: string;
  alt: string;
  label: string;
  sizes: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={cx("relative", className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div className={cx("bg-cross flex items-center justify-center", className)}>
      <span className="rounded-md border-2 border-ink bg-white px-2.5 py-1 font-mono text-xs font-bold">
        {label}
      </span>
    </div>
  );
}
