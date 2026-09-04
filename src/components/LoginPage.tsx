import { useEffect, useState } from "react";
import miffy from "../assets/miffy.png";
import { Clock, Wifi, Power } from "lucide-react";
import FloatingDecorations from "./FloatingDecorations";

type LoginPageProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {/* floating decorations */}
      <FloatingDecorations />

      {/* time */}
      <div className="text-center">
        <h1 className="text-5xl lg:text-6xl font-normal">
          {formattedTime}
        </h1>

        <p className="mt-2 text-lg lg:text-2xl font-medium">
          {formattedDate}
        </p>
      </div>

      {/* login section */}
      <div className="mt-20 flex flex-col items-center gap-6">
        {/* profile picture */}
        <div
          className="h-32 w-32 overflow-hidden rounded-full transition-all duration-500 ease-out
    hover:scale-110
    hover:-translate-y-2
    hover:rotate-3"
        >
          <img
            src={miffy}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* name */}
        <h2 className="text-2xl font-normal">Olivia Suh</h2>

        {/* password */}
        <div className="flex h-14 w-80 items-center justify-start rounded-full bg-white px-6">
          <div className="flex gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>●</span>
            ))}
          </div>
        </div>

        {/* sign-in button */}
        <button
          onClick={onLogin}
          className="rounded-full bg-white px-8 py-2 font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Sign In
        </button>

        {/* bottom system icons */}
        <div className="mt-auto flex items-center gap-6 pt-18 lg:pt-25 2xl:pt-30">
          <Wifi size={28} strokeWidth={2.7} />
          <Clock size={28} strokeWidth={2.7} />
          <Power size={28} strokeWidth={2.7} />
        </div>
      </div>
    </main>
  );
}
