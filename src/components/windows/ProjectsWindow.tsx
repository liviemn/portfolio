import WindowDesign from "../WindowDesign";

type ProjectsWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectsWindow({
  isOpen,
  onClose,
}: ProjectsWindowProps) {
  return (
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
      title="projects"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg">♡ SQLgui</h3>
          <p className="text-sm text-[#6F5C50]">
            Interactive visual SQL schema builder.
          </p>
        </div>

        <div>
          <h3 className="text-lg">♡ Portfolio</h3>
          <p className="text-sm text-[#6F5C50]">
            My interactive desktop-style portfolio.
          </p>
        </div>
      </div>
    </WindowDesign>
  );
}