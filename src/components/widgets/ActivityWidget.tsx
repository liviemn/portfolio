import { useLanyard } from "use-lanyard";
import musicphoto from "../../assets/no-music.webp";

const DISCORD_ID = "348153501148381184";

const statuses = {
  online: { label: "online", color: "bg-[#78936e]" },
  idle: { label: "idle", color: "bg-[#c39b59]" },
  dnd: { label: "do not disturb", color: "bg-[#b77979]" },
  offline: { label: "offline", color: "bg-[#aaa39e]" },
};

export default function ActivityWidget() {
  const presence = useLanyard(DISCORD_ID);
  const status = presence ? statuses[presence.discord_status] : undefined;
  const isOffline = presence?.discord_status === "offline";

  const activity = presence?.activities.find(
    (item) => item.name !== "Spotify" && item.type !== 4,
  );

  const song = presence?.listening_to_spotify ? presence.spotify : null;

  return (
    <>
      {/* Discord activity card */}
      <section
        aria-label="My Discord activity"
        className="w-[300px] rounded-[22px] border border-[#d9cbbf]
                   bg-[#fff7ee] px-4 py-3 text-[#3d2f2b] shadow-sm"
      >
        <header className="flex items-center justify-between gap-3">
          <h2 className="font-satisfy text-2xl">my activity</h2>

          <span className="flex items-center gap-1.5 font-sans text-xs">
            <span
              aria-hidden="true"
              className={`size-2 rounded-full ${status?.color ?? "bg-stone-400"}`}
            />
            {status?.label ?? "connecting"}
          </span>
        </header>

        {!isOffline && activity && (
          <div className="mt-2 flex items-center gap-2 border-t border-[#e3d8ce] pt-2">
            <span aria-hidden="true" className="text-[#92796c]">
              ✧
            </span>
            <p className="text-base">{activity.name}</p>
          </div>
        )}
      </section>

      {/* Spotify */}
      <section
        aria-label="Spotify music player"
        className="grid w-[300px] grid-cols-[minmax(0,1fr)_64px]
                   items-center gap-3 rounded-[20px] border border-[#bfbab7]
                   bg-linear-to-br from-white via-[#e9e6e3] to-[#c8c5c2]
                   p-3 shadow-[inset_0_1px_2px_white,0_2px_5px_#493c3026]"
      >
        {/* Pink display and black bezel */}
        <div className="flex min-w-0 overflow-hidden rounded-[10px] bg-[#211f20] p-1">
          <div className="relative min-w-0 flex-1 overflow-hidden rounded-[6px] bg-[#eddddf] p-2">
            <div className="flex h-12 items-center gap-2">
              {song ? (
                <>
                  {song.album_art_url && (
                    <img
                      src={song.album_art_url}
                      alt=""
                      className="size-9 shrink-0 rounded-[5px] object-cover"
                    />
                  )}

                  <div className="min-w-0 flex-1 text-[#46383c]">
                    <p
                      className="truncate text-sm font-bold leading-tight"
                      title={song.song ?? undefined}
                    >
                      {song.song ?? "Unknown track"}
                    </p>
                    <p
                      className="truncate text-xs leading-tight"
                      title={song.artist ?? undefined}
                    >
                      {song.artist}
                    </p>
                  </div>
                </>
              ) : !presence ? (
                <p className="text-sm text-[#68555d]">
                  checking what's playing…
                </p>
              ) : null}
            </div>

            <div
              aria-hidden="true"
              className="mt-2 grid grid-cols-3 gap-1 text-center text-[#927681]"
            >
              <span className="rounded bg-[#f7e5eb] py-1">♡</span>
              <span className="rounded bg-[#faf2e7] py-1">❀</span>
              <span className="rounded bg-[#eee4f0] py-1">♫</span>
            </div>

            {presence && !song && (
              <img
                src={musicphoto}
                alt="Currently not listening to music"
                className="absolute inset-0 size-full bg-[#eddddf] object-cover"
              />
            )}
          </div>

          <div
            aria-hidden="true"
            className="flex w-4 shrink-0 flex-col items-center justify-around text-[10px] text-[#ded8d9]"
          >
            <span>♫</span>
            <span>≋</span>
            <span>↻</span>
          </div>
        </div>

        {/* Decorative camera, battery, wheel, and speaker */}
        <div aria-hidden="true" className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between px-1">
            <span className="size-2.5 rounded-full border-2 border-stone-400 bg-stone-700" />

            <span className="h-2.5 w-5 rounded-sm border border-stone-400 bg-stone-100 p-px">
              <span className="block h-full w-3/4 rounded-[1px] bg-[#93ad83]" />
            </span>
          </div>

          <div
            className="flex size-13 items-center justify-around rounded-full
                       border border-[#aaa7a4] bg-linear-to-br from-white
                       via-[#bdbbb9] to-[#e9e8e6] text-[9px] text-[#534e4b]"
          >
            <span>◂</span>
            <span className="size-5 rounded-full border border-[#aaa7a4] bg-[#d8d6d3]" />
            <span>▸</span>
          </div>

          <span className="self-end text-[8px] leading-none tracking-widest text-stone-500">
            •••
          </span>
        </div>
      </section>
    </>
  );
}
