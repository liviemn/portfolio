import { useEffect, useState } from "react";

export default function TimeWidget() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const nextMinute = new Date(now);
    nextMinute.setSeconds(60, 0);

    const timer = window.setTimeout(
      () => setNow(new Date()),
      Math.max(0, nextMinute.getTime() - Date.now())
    );

    return () => window.clearTimeout(timer);
  }, [now]);

  const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = now.getHours() < 12 ? "AM" : "PM";

  return (
    <time
      dateTime={`${String(now.getHours()).padStart(2, "0")}:${minutes}`}
      className="inline-flex items-center gap-2.5"
    >
      <span className="sr-only">
        {hours}:{minutes} {period}
      </span>

      {[hours, minutes].map((value, index) => (
  <span
    key={index}
    aria-hidden="true"
    className="relative grid h-[118px] w-[122px] shrink-0 place-items-center
               overflow-hidden rounded-[14px] border border-[#cec7c5]
               bg-[linear-gradient(180deg,#f2eeed_0%,#eeebea_49%,#e8e4e3_100%)]
               shadow-[0_2px_4px_rgba(70,60,58,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]"
  >
    <span
      className="-translate-y-[8px] scale-y-[1.08] font-[Georgia,serif] text-[88px]
                 font-bold leading-none tracking-normal text-[#666361]
                 tabular-nums"
    >
      {value}
    </span>

    <span
      className="pointer-events-none absolute inset-x-0 top-1/2
                 h-px bg-[#b8b1af]
                 shadow-[0_1px_0_rgba(255,255,255,0.85)]"
    />
  </span>
))}
    </time>
  );
}