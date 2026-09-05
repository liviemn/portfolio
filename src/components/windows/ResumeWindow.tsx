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
      title="resume"
    >
      <div className="space-y-4">
        <p>Click to download my resume ♡</p>

        <button
          className="
            border border-[#CDBA9C]
            bg-[#F7EAD8]
            px-4 py-2
            text-sm
            transition
            hover:-translate-y-0.5
            hover:bg-[#F2DECA]
          "
        >
          resume
        </button>
      </div>
    </WindowDesign>
  );
}