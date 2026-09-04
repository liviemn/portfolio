import BottomBar from "./BottomBar";
import FloatingDecorations from "./FloatingDecorations";
import HeartIcon from "../assets/hearticon.png";
import DocIcon from "../assets/docicon.png";
import LaptopIcon from "../assets/laptopicon.png";
import LetterIcon from "../assets/lettericon.png";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <div className="relative flex-1 overflow-y-auto">
        <div className="relative min-h-screen">
          <FloatingDecorations />
          {/* desktop icons */}
          <div className="absolute left-6 top-5 flex flex-col gap-6">
            <DesktopIcon icon={HeartIcon} label="about me" />

            <DesktopIcon icon={DocIcon} label="resume" />

            <DesktopIcon icon={LaptopIcon} label="projects" />

            <DesktopIcon icon={LetterIcon} label="contact" />
          </div>

          <div className="absolute right-8 top-8 flex flex-col items-end gap-5">
            {/* widget */}
          </div>
          <div className="absolute right-80 top-80 flex flex-col items-end gap-5">
            {/* widget */}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <BottomBar />
    </main>
  );
}
