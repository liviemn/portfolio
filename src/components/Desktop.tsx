import { useState } from "react";
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
import HeadphoneMiffy from "../assets/headphonemiffy.webp"
import ActivityWidget from "./widgets/ActivityWidget";

type WindowType =
  | "about"
  | "projects"
  | "resume"
  | "contact"
  | null;


export default function Desktop() {
    const [activeWindow, setActiveWindow] =
  useState<WindowType>(null);
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <div className="relative flex-1 overflow-y-auto">
        <div className="relative min-h-screen">
          <FloatingDecorations />
          {/* desktop icons */}
          <div className="absolute left-6 top-5 flex flex-col gap-5">
            <DesktopIcon icon={HeartIcon} label="about me" onClick={() => setActiveWindow("about")}/>

            <DesktopIcon icon={DocIcon} label="resume" onClick={() => setActiveWindow("resume")}/>

            <DesktopIcon icon={LaptopIcon} label="projects" onClick={() => setActiveWindow("projects")}/>

            <DesktopIcon icon={LetterIcon} label="contact" onClick={() => setActiveWindow("contact")}/>
          </div>

          <div className="absolute right-8 top-8 hidden flex-col items-end gap-4 md:flex">
            <CalendarWidget/>
            <div className="-translate-x-47">
              <PhotoWidget src={HeadphoneMiffy} alt="decorative"/>           
            </div>
            <div className="flex -translate-x-5 flex-col gap-4">
              <ActivityWidget/>
            </div>
          </div>
          <div className="absolute right-80 top-80 flex flex-col items-end gap-5">
            {/* widget */}
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
