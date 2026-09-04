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
        className="h-25 w-25 object-contain"
      />

      <span className="-mt-4 text-lg text-black">
        {label}
      </span>
    </button>
  );
}