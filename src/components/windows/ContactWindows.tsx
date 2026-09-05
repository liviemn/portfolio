import WindowDesign from "../WindowDesign";

type ContactWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactWindow({
  isOpen,
  onClose,
}: ContactWindowProps) {
  return (
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
      title="contact"
    >
      <div className="space-y-4">
        <p>you've got mail ✉</p>

        <p className="text-sm text-[#6F5C50]">
          My email, LinkedIn, GitHub, and other links can go here.
        </p>
      </div>
    </WindowDesign>
  );
}