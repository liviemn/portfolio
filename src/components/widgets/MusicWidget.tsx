import { useEffect, useState } from "react";
import type { Types } from "use-lanyard";
import musicphoto from "../../assets/no-music.webp";

type MusicWidgetProps = {
  presence: Types.Presence | undefined;
};

function formatTime(ms: number) {
  const seconds = Math.floor(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function MusicWidget({ presence }: MusicWidgetProps) {
  const song = presence?.listening_to_spotify ? presence.spotify : null;
  const start = song?.timestamps?.start;
  const end = song?.timestamps?.end;
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    if (start == null || end == null || end <= start) return;

    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [start, end]);

  const duration = start != null && end != null ? Math.max(0, end - start) : 0;
  const elapsed = start != null ? Math.min(duration, Math.max(0, now - start)) : 0;
  const progress = duration > 0 ? (elapsed / duration) * 100 : 0;

  const title = song
    ? song.song || "Unknown track"
    : presence
      ? "Nothing playing"
      : "Checking Spotify…";

  return (
    <section
      aria-label="Spotify music player"
      className="grid w-[390px] max-w-full grid-cols-[minmax(0,1fr)_28%]
                 items-center gap-2.5 rounded-[22px] border border-[#bfbab8]
                 bg-linear-to-br from-[#faf8f7] via-[#dfdbda] to-[#c4bfbd]
                 p-3 text-[#5a5553]
                 shadow-[inset_0_2px_3px_#fff,inset_0_-3px_5px_#aba5a3,0_3px_7px_#493c3026]"
    >
      {/* Album art and track display */}
      <div
        className="grid min-w-0 grid-cols-[39%_minmax(0,1fr)] items-stretch
                   overflow-hidden rounded-[10px] border border-[#625e5d]
                   bg-linear-to-br from-[#565352] to-[#6d6967]
                   p-[3px] text-[#fffaf5]"
      >
        <img
          src={song?.album_art_url || musicphoto}
          alt=""
          className="aspect-square h-full w-full rounded-[7px] border-2
                     border-[#373332] object-cover"
        />

        <div className="flex min-w-0 flex-col justify-center px-2.5 py-1">
          <p
            title={title}
            className="truncate font-sans text-[13px] font-semibold leading-tight"
          >
            {title}
          </p>

          {song?.artist && (
            <p
              title={song.artist}
              className="mt-0.5 truncate text-[14px] italic leading-tight text-[#eee6e0]"
            >
              {song.artist}
            </p>
          )}

          <div
            aria-hidden="true"
            className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/30"
          >
            <div
              className="h-full rounded-full bg-[#fffaf5]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-1 flex justify-between font-sans text-[9px] leading-none tabular-nums">
            <span>{formatTime(elapsed)}</span>
            <span>−{formatTime(duration - elapsed)}</span>
          </div>

          <div
            aria-hidden="true"
            className="mt-1.5 flex items-center justify-evenly font-sans text-[11px] leading-none"
          >
            <span>◀◀</span>
            <span>{song ? "❚❚" : "▶"}</span>
            <span>▶▶</span>
          </div>
        </div>
      </div>

      {/* Decorative click wheel */}
      <div
        aria-hidden="true"
        className="relative grid aspect-square w-full place-items-center
                   rounded-full border border-[#aaa5a3]
                   bg-linear-to-br from-[#f8f5f4] via-[#eeeae9] to-[#e3dedd]
                   font-sans text-[#625e5d]
                   shadow-[inset_0_0_0_1px_#fff]"
      >
        <span className="absolute top-[8%] text-[9px] font-bold tracking-wide">
          MENU
        </span>
        <span className="absolute left-[7%] text-[11px]">⏮︎</span>

        <span
          className="aspect-square w-[36%] rounded-full
                     bg-linear-to-b from-[#c9c3c1] to-[#e6e1df]
                     shadow-[0_1px_1px_#fff]"
        />

        <span className="absolute right-[7%] text-[11px]">⏭︎</span>
        <span className="absolute bottom-[8%] text-[9px] font-bold">▶ Ⅱ</span>
      </div>
      
    </section>
  );
}