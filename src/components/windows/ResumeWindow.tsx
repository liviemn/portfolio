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
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        <p>Click to look at my resume</p>

        <a
          href="/swe_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            border border-[#CDBA9C]
            bg-[#F7EAD8]
            px-4 py-2
            text-sm
            transition
            hover:-translate-y-0.5
            hover:bg-[#F2DECA]
          "
        >
          view resume ↗
        </a>
      </div>
    </WindowDesign>
  );
}