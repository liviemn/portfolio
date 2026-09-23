import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import WindowDesign from "../WindowDesign";

type ContactWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactWindow({
  isOpen,
  onClose,
}: ContactWindowProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      await emailjs.send(
        "service_ijftevs",
        "template_7ntb8h7",
        {
          reply_to: String(data.get("reply_to") ?? "").trim(),
          subject: String(data.get("subject") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        },
        {
          publicKey: "vA2iO6NLKY4dR4iP9",
        }
      );

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

    const inputStyle =
    "w-full min-w-0 border-0 bg-transparent px-2 py-3 " +
    "font-mono text-sm text-[#494336] " +
    "placeholder:text-[#948C7C] outline-none " +
    "focus:bg-[#E6E2D3]/50 rounded-sm transition-colors";

  return (
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="relative isolate px-1 py-3 text-[#494336] sm:px-4">
        {/* Scrapbook heading */}
        <div className="mb-7">
          <p className="mb-1 font-serif text-xl italic text-[#797A60]">
            a little note
          </p>

          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            get in touch
          </h2>

          {/* Hand-drawn underline */}
          <svg
            viewBox="0 0 400 18"
            fill="none"
            aria-hidden="true"
            className="mt-1 h-5 w-full max-w-sm text-[#797A60]"
          >
            <path
              d="M3 10 Q160 0 395 9 M15 15 Q150 7 285 13"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-3 font-mono text-xs leading-relaxed">
            linkedin github spotify
            <br />
            leave a little something below.
          </p>
        </div>

        {/* Stationery paper */}
        <div className="relative">
          {/* Decorative masking tape */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 left-1/2
                       z-10 h-7 w-28 -translate-x-1/2 -rotate-3
                       border-x border-[#A59B7A]/20 bg-[#B8AF91]/60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, " +
                "transparent 3px, rgba(255,255,255,0.12) 3px, " +
                "rgba(255,255,255,0.12) 4px)",
              clipPath:
                "polygon(2% 0, 98% 0, 100% 15%, 98% 30%, " +
                "100% 50%, 98% 70%, 100% 100%, 0 100%, " +
                "2% 80%, 0 60%, 2% 40%, 0 20%)",
            }}
          />

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-sm
                       border border-[#D5CEBF] bg-[#F8F5EC]
                       shadow-[3px_5px_12px_rgba(73,67,54,0.10)]"
          >
            <div
              className="flex items-center justify-between
                         border-b border-[#D5CEBF] px-5 pb-4 pt-7"
            >
              <span
                className="-rotate-1 bg-[#B5B69B]/60 px-3 py-1
                           font-mono text-xs tracking-wide"
              >
                a letter to olivia
              </span>

              <span
                aria-hidden="true"
                className="rotate-12 font-serif text-2xl text-[#797A60]"
              >
                ☆
              </span>
            </div>

            <fieldset
              disabled={status === "sending"}
              className="min-w-0 px-4 pb-5 pt-2
                         disabled:opacity-70 sm:px-6"
            >
              <div
                className="flex items-center gap-2
                           border-b border-[#D5CEBF]
                           py-3 font-mono text-sm"
              >
                <span className="w-16 shrink-0 text-[#817967]">
                  to:
                </span>
                <span className="px-2">olivia</span>
              </div>

              <label
                className="flex items-center gap-2
                           border-b border-[#D5CEBF]"
              >
                <span
                  className="w-16 shrink-0 font-mono
                             text-sm text-[#817967]"
                >
                  from:
                </span>

                <input
                  type="email"
                  name="reply_to"
                  autoComplete="email"
                  placeholder="your email"
                  required
                  maxLength={254}
                  className={inputStyle}
                />
              </label>

              <label
                className="flex items-center gap-2
                           border-b border-[#D5CEBF]"
              >
                <span
                  className="w-16 shrink-0 font-mono
                             text-sm text-[#817967]"
                >
                  subject:
                </span>

                <input
                  type="text"
                  name="subject"
                  placeholder="topic..."
                  required
                  maxLength={150}
                  className={inputStyle}
                />
              </label>

              <label className="mt-5 block">
                <span className="sr-only">Your message</span>

                <textarea
                  name="message"
                  placeholder="..."
                  required
                  maxLength={5000}
                  rows={7}
                  className="block min-h-56 w-full resize-y
                             rounded-sm border-0 bg-transparent
                             px-2 py-0 font-mono text-sm
                             leading-8 text-[#494336]
                             placeholder:text-[#948C7C]
                             outline-none focus:ring-1
                             focus:ring-[#929578]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(" +
                      "to bottom, transparent 0px, " +
                      "transparent 31px, #DDD6C8 31px, " +
                      "#DDD6C8 32px)",
                  }}
                />
              </label>

              <div
                className="mt-5 flex flex-wrap items-center
                           justify-between gap-3"
              >
                <span className="font-serif text-sm italic text-[#817967]">
                  sent with a little love ♡
                </span>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-sm border border-[#787B61]
                             bg-[#989C7F] px-5 py-2
                             font-mono text-sm text-[#24291C]
                             shadow-[2px_2px_0px_#D5CEBF]
                             transition-colors hover:bg-[#ACAF95]
                             focus-visible:outline-2
                             focus-visible:outline-offset-4
                             focus-visible:outline-[#787B61]
                             disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "sending" ? "sending..." : "send letter ↗"}
                </button>
              </div>
            </fieldset>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="px-5 pb-4 font-mono text-xs text-[#596344]">
                  letter sent. thank you for stopping by
                </p>
              )}

              {status === "error" && (
                <p className="px-5 pb-4 font-mono text-xs text-[#965E4E]">
                  couldn't send your letter. please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <p
          aria-hidden="true"
          className="mt-5 text-center font-mono text-xs
                     tracking-[0.3em] text-[#817967]"
        >
          ♡ · ☆ · ♡
        </p>
      </div>
    </WindowDesign>
  );
}