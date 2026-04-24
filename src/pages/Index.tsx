import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSanity,
  SiContentful,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZod,
  SiPnpm,
  SiBun,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiExpo,
  SiClerk,
  SiLinux,
} from "react-icons/si";
import { FaBoxOpen, FaAws } from "react-icons/fa6";
import flowerImg from "@/assets/steel-flower.webp";

type Skill = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  color?: string;
};

const rows: Skill[][] = [
  [
    { name: "ReactJS", Icon: SiReact, color: "#61DAFB" },
    { name: "NextJS", Icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", Icon: SiTypescript, color: "#FFFFFF" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#FFFFFF" },
    { name: "Motion", Icon: SiFramer, color: "#EAB308" },
    { name: "Sanity", Icon: SiSanity, color: "#F03E2F" },
  ],
  [
    { name: "Contentful", Icon: SiContentful, color: "#FFFFFF" },
    { name: "NodeJS", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "ExpressJS", Icon: SiExpress, color: "#FFFFFF" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#FFFFFF" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
  ],
  [
    { name: "Zustand", Icon: FaBoxOpen, color: "#C58E5A" },
    { name: "Zod", Icon: SiZod, color: "#FFFFFF" },
    { name: "pnpm", Icon: SiPnpm, color: "#F69220" },
    { name: "Bun", Icon: SiBun, color: "#F9F1E1" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
    { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  ],
  [
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Docker", Icon: SiDocker, color: "#FFFFFF" },
    { name: "Expo", Icon: SiExpo, color: "#FFFFFF" },
    { name: "Clerk", Icon: SiClerk, color: "#FFFFFF" },
    { name: "Linux", Icon: SiLinux, color: "#FFFFFF" },
  ],
];

const Index = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const targetRotation = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      // Scroll down -> negative (counter-clockwise). Scroll up -> positive (clockwise).
      // 1px scroll = ~0.6deg rotation
      targetRotation.current -= delta * 0.6;
      lastScrollY.current = currentY;
    };

    const animate = () => {
      setRotation((prev) => {
        const next = prev + (targetRotation.current - prev) * 0.12;
        return Math.abs(next - targetRotation.current) < 0.01
          ? targetRotation.current
          : next;
      });
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(0_0%_3%)] text-foreground">
      {/* SEO */}
      <h1 className="sr-only">My Skillset — The Magic Behind</h1>

      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24">
        {/* Flower + overlapping headings */}
        <div className="relative flex w-full flex-col items-center">
          {/* Flower (only top 60% will be visible; bottom 40% sits behind the text) */}
          <div className="relative flex items-center justify-center">
            <div
              className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, hsl(320 100% 60% / 0.15), transparent 70%)",
              }}
            />
            <img
              src={flowerImg}
              alt="Polished steel flower representing my skillset"
              className="h-[280px] w-[280px] select-none object-contain sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[400px]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "50% 50%",
                willChange: "transform",
              }}
              draggable={false}
            />
          </div>

          {/* Headings — pulled up so they overlay the lower 40% of the flower */}
          <div className="relative z-10 -mt-[112px] flex w-full flex-col items-center sm:-mt-[160px] md:-mt-[208px]">
            {/* Black blurred backdrop — transparent at top, dense black at bottom */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-10 bottom-[-40px] -z-10 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(to bottom, hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.55) 45%, hsl(0 0% 0% / 0.9) 80%, hsl(0 0% 0% / 1) 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
              }}
            />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white">
              My Skillset
            </p>
            <h2 className="mt-3 text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-white">The Magic </span>
              <span className="font-serif italic text-magic-gradient">Behind</span>
            </h2>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14 flex w-full max-w-5xl flex-col items-center gap-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {row.map(({ name, Icon, color }) => (
                <span key={name} className="skill-pill">
                  <Icon
                    className="h-4 w-4 shrink-0"
                    {...(color ? { style: { color } } : {})}
                  />
                  <span>{name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Spacer to enable scrolling so the flower can spin */}
      <section className="h-[120vh]" aria-hidden="true" />
    </main>
  );
};

export default Index;
