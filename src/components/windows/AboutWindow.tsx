import WindowDesign from "../WindowDesign";

type AboutWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutWindow({
  isOpen,
  onClose,
}: AboutWindowProps) {
  return (
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-5">
        <p className="leading-7">
          Hello ♡
        </p>

        <p className="text-sm leading-6 text-[#6F5C50]">
          TBD
        </p>
      </div>
    </WindowDesign>
  );
}