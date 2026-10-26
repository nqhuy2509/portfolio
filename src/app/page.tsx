import { ButtonLink } from "@/components/button-link";
import { ContributionGraph } from "@/components/contribution-graph";
import { Media } from "@/components/media";
import { SiteHeader } from "@/components/site-header";
import { Tile, TileLabel, TileLink } from "@/components/tile";
import { profile } from "@/data/profile";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const [featured, second] = profile.projects;

  return (
    <div id="top" className="flex flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:rounded-[10px] focus:border-[2.5px] focus:border-ink focus:bg-accent focus:px-4 focus:py-2 focus:font-bold"
      >
        Bỏ qua đến nội dung
      </a>

      <SiteHeader />

      <main id="main" className="mx-auto w-full max-w-[1200px] px-4 pb-12 pt-2 sm:px-8">
        <div className="grid auto-rows-[minmax(180px,auto)] grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Giới thiệu */}
          <section
            id="about"
            className="flex flex-col gap-3 rounded-[14px] border-[2.5px] border-ink bg-white p-6 shadow-brutal sm:col-span-2 sm:row-span-2 sm:p-[30px]"
          >
            <p className="m-0 self-start rounded-md border-2 border-ink bg-green px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-[0.04em]">
              Xin chào, tôi là
            </p>
            <h1 className="m-0 font-expanded text-4xl leading-[1.02] font-black tracking-[-0.02em] lg:text-[46px]">
              {profile.name}
            </h1>
            <p className="m-0 text-[19px] font-bold">{profile.role}</p>
            <p className="m-0 max-w-[440px] text-pretty text-ink-soft">{profile.bio}</p>
            <div className="flex-1" />
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#projects">Xem dự án →</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Liên hệ
              </ButtonLink>
            </div>
          </section>

          {/* Ảnh chân dung */}
          <Tile tone="blue" className="min-h-80 sm:row-span-2">
            <Media
              src={profile.photo}
              alt={`Ảnh chân dung ${profile.name}`}
              label="Ảnh chân dung"
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
              className="flex-1"
            />
          </Tile>

          {/* Trạng thái */}
          <Tile tone="green" className="gap-1 p-[22px]">
            <TileLabel>Trạng thái</TileLabel>
            <div className="flex-1" />
            <p className="m-0 font-semi-expanded text-[21px] leading-tight font-extrabold">
              {profile.status.label} ✓
            </p>
            <p className="m-0 text-sm">{profile.status.detail}</p>
          </Tile>

          {/* Địa điểm */}
          <Tile className="gap-1 p-[22px]">
            <TileLabel>Đang ở</TileLabel>
            <div className="flex-1" />
            <p className="m-0 font-semi-expanded text-[21px] leading-tight font-extrabold">
              {profile.location.city}
            </p>
            <p className="m-0 font-mono text-[13px] text-ink-soft">
              {profile.location.country} · {profile.location.timezone}
            </p>
          </Tile>

          {/* Công nghệ */}
          <Tile tone="accent" className="gap-3.5 p-[22px] sm:col-span-2">
            <TileLabel>Công nghệ</TileLabel>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-sm font-bold">
              {profile.stack.map((tech) => (
                <li
                  key={tech}
                  className="flex h-[34px] items-center rounded-lg border-2 border-ink bg-white px-3"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Tile>

          {/* Kinh nghiệm */}
          <Tile tone="pink" className="gap-0.5 p-[22px]">
            <TileLabel>Kinh nghiệm</TileLabel>
            <div className="flex-1" />
            <p className="m-0 font-expanded text-[40px] leading-none font-black tracking-[-0.02em]">
              {profile.experience.years}+ năm
            </p>
            <p className="m-0 text-sm">Hiện tại: {profile.experience.company}</p>
          </Tile>

          {/* Hoạt động GitHub */}
          <Tile className="gap-3.5 p-[22px]">
            <TileLabel>Hoạt động GitHub</TileLabel>
            <ContributionGraph />
            <p className="m-0 mt-auto font-mono text-xs text-ink-soft">(minh hoạ)</p>
          </Tile>

          {/* Dự án nổi bật */}
          <TileLink
            id="projects"
            href={featured.href}
            {...external}
            className="sm:col-span-2 sm:row-span-2"
          >
            <Media
              src={featured.image}
              alt={featured.title}
              label="Ảnh / video dự án nổi bật"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="min-h-56 flex-1 border-b-[2.5px] border-ink bg-sand"
            />
            <div className="flex items-center justify-between gap-3 px-[22px] py-4">
              <div className="flex flex-col gap-0.5">
                <h2 className="m-0 font-semi-expanded text-xl font-extrabold">
                  {featured.title}
                </h2>
                <p className="m-0 font-mono text-[13px] text-ink-soft">
                  {featured.stack} · {featured.year}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] border-[2.5px] border-ink bg-accent text-lg font-black shadow-brutal-sm"
              >
                ↗
              </span>
            </div>
          </TileLink>

          {/* Dự án 2 */}
          <TileLink href={second.href} {...external} tone="blue" className="sm:row-span-2">
            <Media
              src={second.image}
              alt={second.title}
              label="Ảnh dự án"
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
              className="min-h-56 flex-1 border-b-[2.5px] border-ink bg-white"
            />
            <div className="flex flex-col gap-0.5 px-[22px] py-4">
              <h2 className="m-0 font-semi-expanded text-xl font-extrabold">
                {second.title} <span aria-hidden="true">↗</span>
              </h2>
              <p className="m-0 font-mono text-[13px]">
                {second.stack} · {second.year}
              </p>
            </div>
          </TileLink>

          {/* GitHub */}
          <TileLink href={profile.github.href} {...external} className="justify-between p-[22px]">
            <span
              aria-hidden="true"
              className="flex size-[46px] items-center justify-center rounded-[10px] border-[2.5px] border-ink bg-ink font-mono text-[13px] font-bold text-white"
            >
              GH
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-lg font-extrabold">GitHub ↗</span>
              <span className="font-mono text-[13px] text-ink-soft">{profile.github.handle}</span>
            </span>
          </TileLink>

          {/* LinkedIn */}
          <TileLink
            href={profile.linkedin.href}
            {...external}
            tone="pink"
            className="justify-between p-[22px]"
          >
            <span
              aria-hidden="true"
              className="flex size-[46px] items-center justify-center rounded-[10px] border-[2.5px] border-ink bg-white font-mono text-[13px] font-bold"
            >
              in
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-lg font-extrabold">LinkedIn ↗</span>
              <span className="font-mono text-[13px]">{profile.linkedin.handle}</span>
            </span>
          </TileLink>

          {/* Liên hệ */}
          <Tile
            id="contact"
            tone="ink"
            shadow="shadow-[5px_5px_0_var(--color-accent)]"
            className="justify-between gap-3 p-6 sm:col-span-2 sm:p-[30px] lg:col-span-3"
          >
            <TileLabel as="p" className="text-accent">
              Liên hệ
            </TileLabel>
            <h2 className="m-0 font-expanded text-[28px] leading-[1.05] font-black tracking-[-0.02em] sm:text-[32px]">
              Có ý tưởng? Cùng trò chuyện nhé.
            </h2>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`} variant="inverseAccent">
                {profile.email}
              </ButtonLink>
              {profile.scheduleUrl && (
                <ButtonLink href={profile.scheduleUrl} {...external} variant="inverse">
                  Đặt lịch gọi
                </ButtonLink>
              )}
            </div>
          </Tile>

          {/* CV */}
          <TileLink
            href={profile.cv.href}
            download
            tone="green"
            className="justify-between p-[22px] sm:col-span-2 lg:col-span-1"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 4v11" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
            <span className="flex flex-col gap-0.5">
              <span className="text-lg font-extrabold">Tải CV</span>
              <span className="font-mono text-[13px]">PDF · {profile.cv.updated}</span>
            </span>
          </TileLink>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[1200px] px-4 pb-10 font-mono text-[13px] sm:px-8">
        © {profile.name}
      </footer>
    </div>
  );
}
