import WindowDesign from "../WindowDesign";

type ResumeWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumeWindow({
  isOpen,
  onClose,
}: ResumeWindowProps) {
  return (
    <WindowDesign isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 pb-6 text-[#494336]">
        {/* Heading */}
        <div>
          <h2 className="pr-12 font-serif text-4xl tracking-tight sm:text-5xl">
            resume
          </h2>

          {/* Hand-drawn underline */}
          <svg
            viewBox="0 0 400 18"
            fill="none"
            aria-hidden="true"
            className="mt-2 h-5 w-full max-w-sm text-[#797A60]"
          >
            <path
              d="M3 10 Q160 0 395 9 M15 15 Q150 7 285 13"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>

          <div
            className="mt-4 flex flex-col gap-4
                       sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-xs font-mono text-sm leading-relaxed">
              My experience, education, and technical skills.
            </p>
          </div>
        </div>

        {/* Paper preview */}
        <div className="relative mx-auto w-full max-w-lg pt-3">
          {/* Masking tape */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0 z-10
              h-5 w-20 sm:h-8 sm:w-28
              -translate-x-1/2 -rotate-3
              bg-[#B8AF91]/60
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, " +
                "transparent 3px, rgba(255,255,255,0.15) 3px, " +
                "rgba(255,255,255,0.15) 4px)",
              clipPath:
                "polygon(2% 0, 98% 0, 100% 15%, 98% 30%, " +
                "100% 50%, 98% 70%, 100% 100%, 0 100%, " +
                "2% 80%, 0 60%, 2% 40%, 0 20%)",
            }}
          />

          <a
            href="/swe_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Olivia's resume PDF in a new tab"
            className="
              block
              border border-[#D5CEBF]
              bg-white p-2
              shadow-[3px_5px_16px_rgba(73,67,54,0.12)]
              transition-shadow
              hover:shadow-[3px_8px_22px_rgba(73,67,54,0.18)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#797A60]
            "
          >
            <img
              src="/swe_resume.png"
              alt="Preview of Olivia's resume"
              className="block h-auto w-full"
            />
          </a>

          <p className="mt-4 text-center font-mono text-xs text-[#756D60]">
            Click the preview to open the full PDF in a new tab.
          </p>
        </div>
      </div>
    </WindowDesign>
  );
}