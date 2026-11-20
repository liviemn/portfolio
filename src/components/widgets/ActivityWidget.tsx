import type { Types } from "use-lanyard";

type ActivityWidgetProps = {
  presence: Types.Presence | undefined;
};

const statuses = {
  online: { label: "online", color: "bg-[#78936e]" },
  idle: { label: "idle", color: "bg-[#c39b59]" },
  dnd: { label: "do not disturb", color: "bg-[#b77979]" },
  offline: { label: "offline", color: "bg-[#aaa39e]" },
};

export default function ActivityWidget({ presence }: ActivityWidgetProps) {
  const status = presence ? statuses[presence.discord_status] : undefined;
  const activity = presence?.activities.find(
    (item) => item.name !== "Spotify" && item.type !== 4,
  );

    return (
    <section
      aria-label="My Discord activity"
      className="w-[270px] max-w-full overflow-hidden rounded-[14px]
                 border border-[#cfc7c2] bg-[#fbf5ef] text-[#302823]
                 shadow-[0_5px_12px_rgba(68,52,45,0.12)]"
    >

      <div
        aria-hidden="true"
        className="flex h-6 items-center gap-[7px] border-b border-[#ddd6d1]
                   bg-gradient-to-b from-[#f7f5f4] to-[#eae6e5] px-3
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
      >
        {["bg-[#b5afad]", "bg-[#e6e2e0]", "bg-[#d4cfcc]"].map((color) => (
          <span
            key={color}
            className={`size-3 rounded-full border border-[#99918e]
                        shadow-[inset_0_1px_1px_rgba(65,50,45,0.2),0_1px_0_white]
                        ${color}`}
          />
        ))}
      </div>

      <div className="px-4 pb-4 pt-3">
        <header className="flex items-center justify-between gap-3">
          <h2 className="font-satisfy text-[25px] leading-tight">
            my activity
          </h2>

          <span className="inline-flex items-center gap-2 whitespace-nowrap font-sans text-sm">
            <span
              aria-hidden="true"
              className={`size-2.5 rounded-full ${status?.color ?? "bg-stone-400"}`}
            />
            {status?.label ?? "connecting"}
          </span>
        </header>

        {presence?.discord_status !== "offline" && activity && (
          <div className="mt-3 flex items-center gap-2.5 border-t border-[#e2d9d2] pt-3">
            <span aria-hidden="true" className="text-[23px] leading-none text-[#a3968d]">
              ✧
            </span>
            <p className="min-w-0 break-words text-[18px] leading-tight">
              {activity.name}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}