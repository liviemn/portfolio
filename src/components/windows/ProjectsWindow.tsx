import WindowDesign from "../WindowDesign";
import { FaGithub } from "react-icons/fa";
import SpotifyWrapped from "../../assets/spotifywrapped.webp";
import MusicBot from "../../assets/musicbot.webp";
import SQLGui from "../../assets/sqlgui.webp";
import Portfolio from "../../assets/portfolio.webp";

type ProjectsWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

const projects = [
  {
    title: "Mini Spotify Wrapped",
    description: "A little snapshot of your listening habits.",
    image: SpotifyWrapped,
    languages: ["React", "Java", "SpringBoot", "Spotify API", "OAuth2"],
    githubUrl: "https://github.com/liviemn/mini-spotify-wrapped",
  },
  {
    title: "Discord Music Bot",
    description: "A music companion for your Discord server.",
    image: MusicBot,
    languages: ["JavaScript", "Discord.js", "Discord API"],
    githubUrl: "https://github.com/liviemn/discord-music-bot",
  },
  {
    title: "SQLgui",
    description: "Interactive visual SQL schema builder.",
    image: SQLGui,
    languages: ["React", "Flask", "Docker", "HTML", "CSS", "JavaScript"],
    githubUrl: "",
  },
  {
    title: "Portfolio",
    description: "My interactive desktop-style portfolio.",
    image: Portfolio,
    languages: ["React", "TypeScript", "HTML", "CSS", "TailwindCSS"],
    githubUrl: "https://github.com/liviemn/portfolio",
  },
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-[#F7EDC8] border-[#E7D9A5] text-[#716036]",
  Java: "bg-[#F5DDD9] border-[#E5BCB5] text-[#875C55]",
  Python: "bg-[#DFEAF5] border-[#C3D5E7] text-[#49647B]",
  TypeScript: "bg-[#E8E0F3] border-[#D2C3E3] text-[#69557D]",
  HTML: "bg-[#F8E1D7] border-[#E8C5B6] text-[#895F4E]",
  CSS: "bg-[#F3DFEA] border-[#E3BFD2] text-[#855D73]",
  React: "bg-[#DDF2EF] border-[#BBDDD7] text-[#48736C]",
};

export default function ProjectsWindow({
  isOpen,
  onClose,
}: ProjectsWindowProps) {
  return (
    <WindowDesign isOpen={isOpen} onClose={onClose}>
      <div className="px-2 pb-4 text-[#3D2F2B] sm:px-4">
        <header className="relative mb-8 pr-10">
          <div className="flex items-center gap-3 sm:gap-5">
            <h2 className="text-3xl sm:text-4xl">selected projects</h2>

            {/* Hand-drawn bow */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 70"
              fill="none"
              className="hidden h-12 w-16 shrink-0 text-[#B29484] sm:block"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M49 28C35 7 8 8 12 23C15 36 37 32 49 28Z" />
              <path d="M51 28C65 7 91 7 88 23C85 36 64 32 51 28Z" />
              <path d="M48 30C43 46 34 56 21 60" />
              <path d="M52 30C57 45 68 51 83 52" />
              <ellipse cx="50" cy="29" rx="4" ry="5" />
              <path d="M86 8L90 2M93 15L99 12" />
            </svg>
          </div>

          <p className="mt-1 font-satisfy text-lg text-[#6F5C50]">
            a few things I’ve built
          </p>

          {/* Tiny heart accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-2 hidden sm:block"
          >
            <span className="inline-block -rotate-12 text-2xl text-[#B29484]">
              ♡
            </span>
            <span className="ml-1 inline-block translate-y-2 rotate-12 text-sm text-[#EBCBBF]">
              ♥
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                relative flex min-w-0 flex-col
                rounded-2xl border border-[#D8BFB1]
                bg-[#FCF8F4] p-4
                shadow-[0_4px_12px_rgba(108,78,58,0.08)]
                transition duration-200
                hover:border-[#B99B89]
                hover:shadow-[0_6px_16px_rgba(108,78,58,0.12)]
                motion-safe:hover:-translate-y-1
              "
            >
              {/* Gingham washi tape */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -top-2.5
                  left-1/2 z-10 h-5 w-16
                  -translate-x-1/2 -rotate-6
                  bg-[#F4EBDC] opacity-85
                "
                style={{
                  clipPath:
                    "polygon(3% 0%, 97% 0%, 93% 20%, 100% 40%, 94% 60%, 100% 80%, 96% 100%, 0% 100%, 5% 80%, 0% 60%, 6% 40%, 0% 20%)",
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent 0px,
                      transparent 4px,
                      rgba(183, 147, 109, 0.22) 4px,
                      rgba(183, 147, 109, 0.22) 8px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent 0px,
                      transparent 4px,
                      rgba(183, 147, 109, 0.22) 4px,
                      rgba(183, 147, 109, 0.22) 8px
                    )
                  `,
                }}
              />

              {/* Project screenshot */}
              <div
                className="
                  overflow-hidden rounded-lg
                  border border-[#D8CDC5]
                  bg-[#EDE6DE] md:h-[150px]
                "
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="
                    aspect-[16/9] w-full object-cover object-top
                    md:h-full md:aspect-auto
                  "
                />
              </div>

              <div className="flex flex-1 flex-col px-1 pt-3">
                <h3 className="text-xl leading-tight sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[#7C6557]">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((language) => (
                      <span
  key={language}
  className={`
    rounded-full border px-3 py-1
    font-sans text-xs
    ${
      languageColors[language] ??
      "bg-[#E5EDDF] border-[#CCD9C3] text-[#5D7051]"
    }
  `}
>
  {language}
</span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      title="View on GitHub"
                      className="
        inline-flex h-10 w-10 shrink-0
        items-center justify-center
        rounded-full text-[#6F5C50]
        transition-colors hover:bg-[#F1E6DD] hover:text-[#3D2F2B]
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-[#A88876]
      "
                    >
                      <FaGithub size={24} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </WindowDesign>
  );
}
