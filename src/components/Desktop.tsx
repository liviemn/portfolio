import BottomBar from "./BottomBar";

export default function Desktop() {
  return (
    <main className="relative overflow-hidden min-h-screen p-8">
      <div className="flex flex-col gap-8">
        <button className="w-24 text-center">
          <div className="text-5xl">📁</div>
          <span className="mt-1 block text-sm">
            About Me
          </span>
        </button>

        <button className="w-24 text-center">
          <div className="text-5xl">💻</div>
          <span className="mt-1 block text-sm">
            Projects
          </span>
        </button>

        <button className="w-24 text-center">
          <div className="text-5xl">📄</div>
          <span className="mt-1 block text-sm">
            Resume
          </span>
        </button>

        <button className="w-24 text-center">
          <div className="text-5xl">💌</div>
          <span className="mt-1 block text-sm">
            Contact
          </span>
        </button>
      </div>
      <BottomBar />
    </main>
  );
}