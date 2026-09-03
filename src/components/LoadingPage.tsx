type LoadingPageProps = {
  progress: number;
};

export default function LoadingPage({
  progress,
}: LoadingPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Loading content */}
      <div className="absolute left-1/2 top-[35%] z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">

          <p className="text-2xl font-semibold lowercase text-white">
            loading
          </p>

          {/* Loading bar */}
          <div className="h-12 w-80 border-4 border-white p-1">
            <div
              className="h-full bg-white transition-all duration-100"
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