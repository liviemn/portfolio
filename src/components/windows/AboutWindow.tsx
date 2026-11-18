import type { ReactNode } from "react";
import WindowDesign from "../WindowDesign";
import { useState } from "react";
import Me from "../../assets/me.png";
import Bori from "../../assets/bori.png";
import { Typewriter } from "react-simple-typewriter";

type AboutWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

type PaperNoteProps = {
  children: ReactNode;
  className?: string;
  lined?: boolean;
};

function PaperNote({
  children,
  className = "",
  lined = false,
}: PaperNoteProps) {
  return (
    <section
      className={`
        relative min-w-0 rounded-sm border border-[#D8CABB]
        p-5 shadow-[2px_5px_12px_rgba(80,60,40,0.10)]
        ${className}
      `}
      style={
        lined
          ? {
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 27px, rgba(150,125,100,0.13) 27px, rgba(150,125,100,0.13) 28px)",
              backgroundPosition: "0 12px",
            }
          : undefined
      }
    >
      {/* Washi tape */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-3 left-1/2
          h-6 w-20 -translate-x-1/2 -rotate-6
          bg-[#CBB18A]/50
        "
        style={{
          clipPath:
            "polygon(4% 0, 100% 0, 96% 25%, 100% 50%, 96% 75%, 100% 100%, 0 100%, 4% 75%, 0 50%, 4% 25%)",
        }}
      />

      {children}
    </section>
  );
}

const favorites = [
  { label: "season", value: "Autumn" },
  { label: "tv show", value: "The Office" },
  { label: "place", value: "My bed" },
  { label: "game", value: "Animal Crossing" },
  { label: "mbti", value: "INFJ" },
];

const certs = [
  "AWS Cloud Practitioner",
  "CompTIA Security+",
];

const techstack = ["Java", "Python", "C / C++", "TypeScript", "JavaScript", "SQL", "HTML / CSS", "React", "Node.js", "Flask", "Git", "Microsoft Power Apps"];

export default function AboutWindow({ isOpen, onClose }: AboutWindowProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <WindowDesign isOpen={isOpen} onClose={onClose}>
      <div className="px-1 pb-6 pt-2 text-[#3D2F2B] sm:px-3">
        <header className="mb-9 pr-10 text-center">
          <p className="text-xs tracking-[0.18em] text-[#8B7868]">
            A LITTLE PAGE ABOUT ME
          </p>

          <h2
  aria-label="hello, I’m Olivia"
  className="mt-2 min-h-[1.2em] font-satisfy text-5xl sm:text-6xl"
>
  <span aria-hidden="true">
    {isOpen && (
      <Typewriter
        words={["hello, I’m Olivia"]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={100}
      />
    )}
  </span>
</h2>

          <p className="mt-3 text-base text-[#7A6555]">
            ౨ৎ a software engineer based in northern virginia ౨ৎ
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-3">
          {/* About note */}
          <PaperNote lined className="bg-[#FBF4E8] md:-rotate-2">
            <h3
              className="
                mb-4 inline-block -rotate-2
                bg-[#E9C7BC]/70 px-3 py-1
                font-satisfy text-2xl
              "
            >
              about me ♡
            </h3>

            <p className="text-base leading-7">
              I'm a full-stack software engineer graduating in December with a Bachelor's in Computer Science.
            </p>

            <p className="mt-3 text-base leading-7 text-[#756151]">
              Currently on the NCAPS program at CACI.
            </p>
          </PaperNote>

          {/* Flipping Polaroid */}
          <button
            type="button"
            onClick={() => setIsFlipped((previous) => !previous)}
            aria-label={
              isFlipped
                ? "Showing second photo. Flip to first photo"
                : "Showing first photo. Flip to second photo"
            }
            className="
  relative mx-auto block w-full max-w-[260px]
  cursor-pointer text-[#3D2F2B]
  [perspective:1000px]
  transition-transform duration-300 ease-out
  md:rotate-3
  motion-safe:hover:-translate-y-2
  motion-safe:hover:scale-[1.03]
  motion-safe:md:hover:rotate-0
  motion-reduce:transition-none
  focus-visible:outline-2 focus-visible:outline-offset-8
  focus-visible:outline-[#A88876]
"
          >
            <div
              className={`
      relative grid
      [transform-style:preserve-3d]
      transition-transform duration-700 ease-in-out
      motion-reduce:transition-none
      ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    `}
            >
              {/* Front */}
              <div
                aria-hidden={isFlipped}
                className="
        relative col-start-1 row-start-1
        border border-[#DDD2C5] bg-[#FFFCF7]
        p-3 pb-5
        shadow-[3px_6px_14px_rgba(80,60,40,0.13)]
        [backface-visibility:hidden]
        [-webkit-backface-visibility:hidden]
      "
              >
                <img
                  src={Me}
                  alt="Illustrated portrait of Olivia"
                  className="aspect-[4/5] w-full object-cover"
                />

                <p className="mt-4 text-center font-satisfy text-xl">
                  a pic from my trip
                </p>

                <p className="mt-1 text-center text-xs text-[#99816C]">
                  click to flip ♡
                </p>
              </div>

              {/* Back */}
              <div
                aria-hidden={!isFlipped}
                className="
        relative col-start-1 row-start-1
        border border-[#DDD2C5] bg-[#FFFCF7]
        p-3 pb-5
        shadow-[3px_6px_14px_rgba(80,60,40,0.13)]
        [transform:rotateY(180deg)]
        [backface-visibility:hidden]
        [-webkit-backface-visibility:hidden]
      "
              >
                <img
                  src={Bori}
                  alt="Photo of Olivia"
                  className="aspect-[4/5] w-full object-cover"
                />

                <p className="mt-4 text-center font-satisfy text-xl">
                  little bori
                </p>

                <p className="mt-1 text-center text-xs text-[#99816C]">
                  click to flip back ♡
                </p>
              </div>
            </div>
          </button>

          {/* Favorites */}
          <PaperNote lined className="bg-[#F7F1E5] md:rotate-1">
            <h3
              className="
                mb-4 inline-block bg-[#C6CBA8]/65
                px-3 py-1 font-satisfy text-2xl
              "
            >
              my favorites
            </h3>

            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt>♡ colors</dt>
                <dd className="flex gap-1.5">
                  {[
                    { name: "Sage", color: "#A6AD86" },
                    { name: "Blush", color: "#DCAFA5" },
                    { name: "Cream", color: "#E8D8BD" },
                    { name: "Brown", color: "#947258" },
                  ].map(({ name, color }) => (
                    <span
                      key={name}
                      title={name}
                      className="h-4 w-4 rounded-full border border-black/5"
                      style={{ backgroundColor: color }}
                    >
                      <span className="sr-only">{name}</span>
                    </span>
                  ))}
                </dd>
              </div>

              {favorites.map((favorite) => (
                <div
                  key={favorite.label}
                  className="flex justify-between gap-3"
                >
                  <dt className="shrink-0">♡ {favorite.label}</dt>
                  <dd className="text-right text-[#756151]">
                    {favorite.value}
                  </dd>
                </div>
              ))}
            </dl>
          </PaperNote>

          {/* Music */}
          <PaperNote className="bg-[#F0DFCF] md:-rotate-1">
            <h3 className="font-satisfy text-2xl">on repeat ♡</h3>

            <p className="mt-1 text-sm text-[#7A6555]">
              my current go-to tracks
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>♫ Eternal Sunshine - Seo Actor</li>
              <li>♫ Rainy Saturday - Jeminn </li>
              <li>♫ One Small Day - Pateko</li>
            </ul>

            <div aria-hidden="true" className="mt-5 flex items-center gap-2">
              <span className="h-px flex-1 bg-[#A48C75]/50" />
              <span className="text-[#967960]">♡</span>
              <span className="h-px flex-1 bg-[#A48C75]/50" />
            </div>
          </PaperNote>

          {/* Sticky note for quote*/}
          <PaperNote
            className="
              self-center bg-[#D8DCC3]
              py-8 text-center md:rotate-2
            "
          >
            <span aria-hidden="true" className="text-2xl text-[#73805C]">
              ♥
            </span>

            <p className="mt-3 font-satisfy text-xl leading-relaxed">
              "The more that you READ, the more things you will KNOW.
              <br />The more that you LEARN, the more places you'll GO." - Dr. Seuss
            </p>
          </PaperNote>

          {/* Certs */}
          <PaperNote className="bg-[#F2DDD7] md:rotate-1">
            <h3 className="mb-4 font-satisfy text-2xl">my certifications</h3>

            <ul className="space-y-4 text-sm leading-6">
              {certs.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <span aria-hidden="true" className="text-[#A4796C]">
                    📓
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </PaperNote>

          {/* Techstack */}
          <PaperNote className="bg-[#FAF3E7] md:col-span-2">
            <h3 className="mb-4 font-satisfy text-2xl">techstack</h3>

            <div className="flex flex-wrap gap-2">
              {techstack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-[#D8C7B4]
                    bg-[#EFE5D7] px-4 py-1.5
                    text-sm text-[#725E4F]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </PaperNote>

          {/* Small personal note */}
          <PaperNote className="bg-[#F7EDE4] md:-rotate-2">
            <h3 className="mb-3 font-satisfy text-2xl">current obession</h3>

            <p className="text-sm leading-7 text-[#756151]">
              smelling my dog
            </p>
          </PaperNote>
        </div>

        <p className="mt-9 text-center font-satisfy text-xl text-[#8B7462]">
          always ready to learn
        </p>
      </div>
    </WindowDesign>
  );
}
