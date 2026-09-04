import { Cloud, Search, Wifi, House, ChevronUp, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

type TaskbarButtonProps = {
  children: React.ReactNode;
};

function TaskbarButton({ children }: TaskbarButtonProps) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl">
      {children}
    </button>
  );
}

export default function BottomBar() {
  const [time, setTime] = useState(new Date());
  const formattedTime = time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex h-16 w-full items-center justify-between bg-[#3D2F2B] px-6">
      <div className="flex items-center gap-2 text-white">
        <TaskbarButton>
          <Cloud size={35} strokeWidth={2} />
        </TaskbarButton>
        <TaskbarButton>
          <Search size={35} strokeWidth={2} />
        </TaskbarButton>
      </div>


      <div className="flex items-center gap-2 text-white">
        <TaskbarButton>
          <ChevronUp size={35} strokeWidth={2} />
        </TaskbarButton>
        <TaskbarButton>
          <Volume2 size={35} strokeWidth={2} />
        </TaskbarButton>
        <TaskbarButton>
          <Wifi size={35} strokeWidth={2} />
        </TaskbarButton>
        <span className="text-lg">{formattedTime}</span>
        <TaskbarButton>
          <House size={35} strokeWidth={2} />
        </TaskbarButton>
      </div>
    </div>
  );
}
