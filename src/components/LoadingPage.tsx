import FloatingDecorations from "./FloatingDecorations";

type LoadingPageProps = {
  progress: number;
};

export default function LoadingPage({ progress }: LoadingPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* floating decorations */}
      <FloatingDecorations />

      {/* loading content */}
      <div className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl font-semibold lowercase">loading ୨୧</p>

          {/* loading bar */}
          <div className="h-12 w-80 border-4 border-[#3D2F2B] p-1">
            <div
              className="h-full bg-[#3D2F2B] transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
