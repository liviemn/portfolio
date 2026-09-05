import { useEffect } from "react";

type WindowDesignProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function WindowDesign({
  isOpen,
  onClose,
  title,
  children,
}: WindowDesignProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[#4A3A34]/20
        backdrop-blur-[2px]
        px-4 py-6
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[700px]
          animate-[windowOpen_250ms_ease-out]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Outer lace / scalloped layer */}
        <div
          className="
            absolute
            -inset-4
            rounded-[34px]
            border-2
            border-[#B8B0AC]
            bg-[#EDE9E5]
            shadow-[0_18px_45px_rgba(61,47,43,0.18)]
          "
        />


        {/* Main paper */}
        <div
          className="
            relative
            z-10
            flex
            h-[75vh]
            max-h-[820px]
            flex-col
            overflow-hidden
            rounded-[28px]
            border
            border-[#B9B0AA]
            bg-[#F8F5F0]
            text-[#3D2F2B]
          "
        >
          {/* Inner stitched / stationery border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[12px]
              rounded-[22px]
              border
              border-dashed
              border-[#CFC8C3]/80
            "
          />

          {/* Header */}
          <div
            className="
              relative z-10
              flex
              shrink-0
              items-center
              justify-between
              px-8
              pb-4
              pt-7
            "
          >
            <div>
              <h2 className="text-2xl lowercase tracking-wide sm:text-3xl">
                {title}
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close window"
              className="
                flex h-8 w-8
                cursor-pointer
                items-center justify-center
                rounded-full
                border border-[#AAA19C]
                bg-[#EEEAE6]
                text-[#3D2F2B]
                transition
                duration-200
                hover:scale-110
                hover:bg-[#E2DDDA]
              "
            >
              ×
            </button>
          </div>

          {/* Cute divider */}
          <div className="relative z-10 mx-8 border-t border-dashed border-[#CEC7C2]" />

          {/* Scrollable content */}
          <div
            className="
              relative z-10
              min-h-0
              flex-1
              overflow-y-auto
              px-8
              py-7
              sm:px-10
            "
          >
            {children}
          </div>

          {/* Bottom decorative strip */}
          <div
            className="
              relative z-10
              flex shrink-0
              items-center justify-center
              gap-3
              px-8
              pb-6
              pt-3
              text-xs
              text-[#9A918D]
            "
          >
          </div>
        </div>
      </div>
    </div>
  );
}