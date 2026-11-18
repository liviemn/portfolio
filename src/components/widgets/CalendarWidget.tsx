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
  const weekday = today.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = today.toLocaleDateString("en-US", { month: "long" });

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <section
      aria-label={`Calendar for ${today.toLocaleDateString("en-US", {
        dateStyle: "full",
      })}`}
      className="flex w-[350px] max-w-full items-center gap-4 rounded-[24px]
                 border border-white/40 bg-[#aaa7ab] px-4 py-3 text-white
                 shadow-sm"
    >
      <div className="flex w-[35%] shrink-0 flex-col items-center">
        <span className="font-satisfy text-[38px] leading-none lowercase">
          {weekday}
        </span>
        <span className="font-sans text-[62px] font-semibold leading-none">
          {date}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="mb-1 text-right font-satisfy text-2xl leading-none lowercase">
          {monthName}
        </h2>

        <div className="grid grid-cols-7 justify-items-center gap-y-0.5 font-sans text-xs">
          {weekdays.map((label, index) => (
            <span key={`weekday-${index}`} className="font-bold">
              {label}
            </span>
          ))}

          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;

            return (
              <span
                key={day}
                aria-current={day === date ? "date" : undefined}
                style={day === 1 ? { gridColumnStart: firstWeekday + 1 } : undefined}
                className={`grid size-5 place-items-center rounded-full ${
                  day === date
                    ? "bg-white font-bold text-[#68636b]"
                    : day < date
                      ? "text-white/80"
                      : "font-semibold"
                }`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}