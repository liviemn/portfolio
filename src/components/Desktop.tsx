import { useState } from "react";
import BottomBar from "./BottomBar";
import FloatingDecorations from "./FloatingDecorations";
import HeartIcon from "../assets/hearticon.png";
import DocIcon from "../assets/docicon.png";
import LaptopIcon from "../assets/laptopicon.png";
import LetterIcon from "../assets/lettericon.png";
import DesktopIcon from "./DesktopIcon";
import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindows";

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
          <div className="absolute left-6 top-5 flex flex-col gap-6">
            <DesktopIcon icon={HeartIcon} label="about me" onClick={() => setActiveWindow("about")}/>

            <DesktopIcon icon={DocIcon} label="resume" onClick={() => setActiveWindow("resume")}/>

            <DesktopIcon icon={LaptopIcon} label="projects" onClick={() => setActiveWindow("projects")}/>

            <DesktopIcon icon={LetterIcon} label="contact" onClick={() => setActiveWindow("contact")}/>
          </div>

          <div className="absolute right-8 top-8 flex flex-col items-end gap-5">
            {/* widget */}
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
