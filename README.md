# Portfolio

Trang portfolio cá nhân dạng **Bento Grid**, phong cách **Neo-brutalism** — Next.js 16 (App Router) + Tailwind CSS 4.

## Chạy dự án

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build production
pnpm lint
```

## Sửa nội dung

Toàn bộ nội dung nằm trong một file: [`src/data/profile.ts`](src/data/profile.ts).
Thay các giá trị trong `[ngoặc vuông]` bằng thông tin thật.

- **Ảnh chân dung / ảnh dự án:** chép ảnh vào `public/` rồi điền đường dẫn vào `photo` hoặc `projects[i].image`
  (vd. `"/avatar.jpg"`). Khi chưa có ảnh, trang hiện ô giữ chỗ gạch chéo.
- **CV:** chép file vào `public/cv.pdf` (hoặc đổi `cv.href`).
- Hai dự án đầu tiên trong `projects` được hiển thị trong lưới bento.

## Giao diện

| | |
|---|---|
| Màu, bóng đổ | token trong `@theme` ở [`src/app/globals.css`](src/app/globals.css) — đổi `--color-accent` để đổi màu nhấn |
| Font | Archivo (có trục độ rộng, dùng `font-expanded` cho tiêu đề) + Space Mono, tải qua `next/font` với subset `vietnamese` |
| Hiệu ứng | `lift` (ô bento) và `press` (nút) — tự tắt khi người dùng bật giảm chuyển động |
| Lưới | 1 cột (mobile) → 2 cột (≥640px) → 4 cột (≥1024px) |

## Cấu trúc

```
src/
├── app/
│   ├── globals.css        # token & utility của phong cách
│   ├── layout.tsx         # font, metadata, lang="vi"
│   └── page.tsx           # lưới bento
├── components/
│   ├── tile.tsx           # Tile / TileLink / TileLabel
│   ├── button-link.tsx
│   ├── media.tsx          # ảnh hoặc ô giữ chỗ
│   ├── contribution-graph.tsx  # biểu đồ GitHub (dữ liệu minh hoạ)
│   └── site-header.tsx
└── data/
    └── profile.ts         # nội dung trang
```
