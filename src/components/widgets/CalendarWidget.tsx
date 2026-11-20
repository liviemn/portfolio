import { useEffect, useState } from "react";

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

export default function CalendarWidget() {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const timer = window.setTimeout(
      () => setToday(new Date()),
      midnight.getTime() - now.getTime()
    );

    return () => window.clearTimeout(timer);
  }, [today]);

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const monthName = today.toLocaleDateString("en-US", { month: "long" });

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <section
      aria-label={`Calendar for ${today.toLocaleDateString("en-US", {
        dateStyle: "full",
      })}`}
      className="w-[210px] max-w-full rounded-[18px] border border-[#d1c9c7]
                 bg-[#f5f1f0] px-3 pb-2 pt-3 text-[#393433]
                 shadow-[0_3px_8px_rgba(65,51,48,0.10)]"
    >
      <div className="mb-2 flex items-center justify-between px-2">
        <h2 className="text-[23px] font-normal italic leading-none">
          {monthName}
        </h2>

        <svg
          aria-hidden="true"
          viewBox="0 0 52 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-9 text-[#b6a4a1]"
        >
          <path d="M26 13C19 9 13 2 7 5C1 8 4 17 12 17C17 17 22 15 26 13Z" />
          <path d="M26 13C33 9 39 2 45 5C51 8 48 17 40 17C35 17 30 15 26 13Z" />
          <path d="M25 14C20 19 16 27 12 36M27 14C33 20 37 28 40 36" />
        </svg>
      </div>

      <div className="grid grid-cols-7 auto-rows-[20px] place-items-center font-sans text-xs">
        {weekdays.map((label, index) => (
          <span key={`weekday-${index}`} className="font-semibold">
            {label}
          </span>
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const isToday = day === date;

          return (
            <span
              key={day}
              aria-current={isToday ? "date" : undefined}
              style={day === 1 ? { gridColumnStart: firstWeekday + 1 } : undefined}
              className={`grid size-[20px] place-items-center rounded-full leading-none ${
                isToday
                  ? "bg-[#c2a3a1] font-semibold text-white"
                  : "font-medium"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </section>
  );
}