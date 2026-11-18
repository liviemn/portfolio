type DesktopIconProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

export default function DesktopIcon({
  icon,
  label,
  onClick,
}: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-28 cursor-pointer flex-col items-center"
    >
      <img
        src={icon}
        alt={label}
        className="h-30 w-30 object-contain"
      />

      <span className="-mt-6 text-lg text-black">
        {label}
      </span>
    </button>
  );
}