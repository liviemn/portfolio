import { useState } from "react";
import { useLanyard } from "use-lanyard";
import BottomBar from "./BottomBar";
import FloatingDecorations from "./FloatingDecorations";
import HeartIcon from "../assets/hearticon.webp";
import DocIcon from "../assets/docicon.webp";
import LaptopIcon from "../assets/laptopicon.webp";
import LetterIcon from "../assets/lettericon.webp";
import DesktopIcon from "./DesktopIcon";
import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindows";
import CalendarWidget from "./widgets/CalendarWidget";
import PhotoWidget from "./widgets/PhotoWidget";
import HeadphoneMiffy from "../assets/headphonemiffy.webp";
import ActivityWidget from "./widgets/ActivityWidget";
import TimeWidget from "./widgets/TimeWidget";
import MusicWidget from "./widgets/MusicWidget";
import bow from "../assets/pinkbow.webp";

type WindowType = "about" | "projects" | "resume" | "contact" | null;

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null);
  const presence = useLanyard("348153501148381184");
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <div className="relative flex-1 overflow-y-auto">
        <div className="relative min-h-screen">
          <FloatingDecorations />
          {/* desktop icons */}
          <div className="absolute left-6 top-5 flex flex-col gap-5">
            <DesktopIcon
              icon={HeartIcon}
              label="about me"
              onClick={() => setActiveWindow("about")}
            />

            <DesktopIcon
              icon={DocIcon}
              label="resume"
              onClick={() => setActiveWindow("resume")}
            />

            <DesktopIcon
              icon={LaptopIcon}
              label="projects"
              onClick={() => setActiveWindow("projects")}
            />

            <DesktopIcon
              icon={LetterIcon}
              label="contact"
              onClick={() => setActiveWindow("contact")}
            />
          </div>

          <div className="absolute right-8 top-15 hidden flex-col items-start gap-10 md:flex">
            {/* Top row */}
            <div className="flex items-center gap-4">
              <div className="relative flex">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 42 25"
                  shapeRendering="crispEdges"
                  className="pointer-events-none absolute -top-2 -left-2
               w-14 -translate-y-full"
                >
                  <defs>
                    <path
                      id="clock-pixel-heart"
                      d="M2 0h5v2h2v2h2V2h2V0h5v2h2v6h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2H4v-2H2V8H0V2h2Z"
                    />
                  </defs>

                  <g stroke="#b5a19e" strokeWidth="1.4" strokeLinejoin="miter">
                    <use href="#clock-pixel-heart" x="1" y="1" fill="#f4e5e2" />
                    <use
                      href="#clock-pixel-heart"
                      transform="translate(25 11) scale(0.75)"
                      fill="#ead1cf"
                    />
                  </g>
                </svg>

                <TimeWidget />
              </div>
              <CalendarWidget />
            </div>

            {/* Middle row */}
            <div className="relative w-fit max-w-full">
              <MusicWidget presence={presence} />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-7 top-1 z-10
               h-6 w-[78px] -rotate-[32deg] rounded-[1px]
               bg-[#fff9f4] opacity-90 shadow-[0_1px_3px_#59443b26]"
                style={{
                  backgroundImage: `
        repeating-linear-gradient(90deg, #d995993d 0 5px, transparent 5px 10px),
        repeating-linear-gradient(0deg, #d995993d 0 5px, transparent 5px 10px)
      `,
                }}
              />

              <img
                src={bow}
                alt=""
                className="pointer-events-none absolute -right-15 -bottom-10 w-35"
              />
            </div>

            {/* Bottom row */}
            <div className="flex items-center gap-8">
              <PhotoWidget
                src={HeadphoneMiffy}
                alt="Miffy wearing headphones"
              />
              <ActivityWidget presence={presence} />
            </div>
          </div>

          <AboutWindow
            isOpen={activeWindow === "about"}
            onClose={() => setActiveWindow(null)}
          />

          <ResumeWindow
            isOpen={activeWindow === "resume"}
            onClose={() => setActiveWindow(null)}
          />

          <ProjectsWindow
            isOpen={activeWindow === "projects"}
            onClose={() => setActiveWindow(null)}
          />

          <ContactWindow
            isOpen={activeWindow === "contact"}
            onClose={() => setActiveWindow(null)}
          />
        </div>
      </div>

      {/* bottom bar */}
      <BottomBar />
    </main>
  );
}
