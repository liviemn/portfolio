import { useEffect, useState } from "react";
import miffy from "../assets/miffy.png";
import { Clock, Wifi, Power } from "lucide-react";

type LoginPageProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const decorations = [
    {
      symbol: "✦",
      left: "8%",
      top: "18%",
      size: "24px",
      delay: "0s",
      duration: "6s",
    },
    {
      symbol: "♡",
      left: "15%",
      top: "35%",
      size: "20px",
      delay: "1s",
      duration: "7s",
    },
    {
      symbol: "୨୧",
      left: "22%",
      top: "12%",
      size: "18px",
      delay: "2s",
      duration: "5s",
    },
    {
      symbol: "✿",
      left: "30%",
      top: "28%",
      size: "22px",
      delay: "0.5s",
      duration: "8s",
    },
    {
      symbol: "♡",
      left: "38%",
      top: "15%",
      size: "17px",
      delay: "1.5s",
      duration: "6.5s",
    },

    {
      symbol: "✦",
      left: "48%",
      top: "8%",
      size: "20px",
      delay: "2.5s",
      duration: "7.5s",
    },
    {
      symbol: "⋆",
      left: "60%",
      top: "20%",
      size: "16px",
      delay: "0.8s",
      duration: "5.5s",
    },
    {
      symbol: "✧",
      left: "72%",
      top: "14%",
      size: "21px",
      delay: "1.8s",
      duration: "8.5s",
    },
    {
      symbol: "♡",
      left: "82%",
      top: "30%",
      size: "18px",
      delay: "0.3s",
      duration: "6s",
    },
    {
      symbol: "✦",
      left: "90%",
      top: "18%",
      size: "23px",
      delay: "2.2s",
      duration: "7s",
    },

    {
      symbol: "⋆",
      left: "10%",
      top: "62%",
      size: "19px",
      delay: "1.2s",
      duration: "6.8s",
    },
    {
      symbol: "✧",
      left: "18%",
      top: "78%",
      size: "24px",
      delay: "0.7s",
      duration: "7.8s",
    },
    {
      symbol: "♡",
      left: "28%",
      top: "68%",
      size: "17px",
      delay: "2.8s",
      duration: "5.8s",
    },
    {
      symbol: "✦",
      left: "36%",
      top: "82%",
      size: "20px",
      delay: "1.4s",
      duration: "8.2s",
    },
    {
      symbol: "⋆",
      left: "46%",
      top: "72%",
      size: "15px",
      delay: "0.9s",
      duration: "6.2s",
    },

    {
      symbol: "♡",
      left: "58%",
      top: "80%",
      size: "19px",
      delay: "2.1s",
      duration: "7.2s",
    },
    {
      symbol: "✧",
      left: "68%",
      top: "65%",
      size: "22px",
      delay: "1.1s",
      duration: "5.6s",
    },
    {
      symbol: "✦",
      left: "78%",
      top: "76%",
      size: "18px",
      delay: "2.6s",
      duration: "8s",
    },
    {
      symbol: "⋆",
      left: "86%",
      top: "58%",
      size: "17px",
      delay: "0.4s",
      duration: "6.4s",
    },
    {
      symbol: "♡",
      left: "92%",
      top: "82%",
      size: "21px",
      delay: "1.7s",
      duration: "7.6s",
    },
  ];
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
    <main className="flex min-h-screen flex-col items-center px-4 py-8">
      {/* floating decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {decorations.map((item, index) => (
          <span
            key={index}
            className="floating-decoration absolute text-[#B96F8A]"
            style={{
              left: item.left,
              top: item.top,
              fontSize: item.size,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>
      {/* time */}
      <div className="text-center">
        <h1 className="text-5xl lg:text-6xl xl:text-6xl font-normal">
          {formattedTime}
        </h1>

        <p className="mt-2 text-lg lg:text-2xl xl:text-2xl font-medium">
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
        <div className="flex h-14 w-80 items-center justify-start rounded-full bg-white/70 px-6">
          <div className="flex gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>●</span>
            ))}
          </div>
        </div>

        {/* sign-in button */}
        <button
          onClick={onLogin}
          className="rounded-full bg-white/70 px-8 py-2 text-stone-600 font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Sign In
        </button>

        {/* bottom system icons */}
        <div className="mt-auto flex items-center gap-6 pt-18 lg:pt-25 xl:pt-25 2xl:pt-30">
          <Wifi size={28} strokeWidth={2.7} />
          <Clock size={28} strokeWidth={2.7} />
          <Power size={28} strokeWidth={2.7} />
        </div>
      </div>
    </main>
  );
}
