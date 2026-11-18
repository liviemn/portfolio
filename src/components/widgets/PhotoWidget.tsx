type PhotoWidgetProps = {
  src: string;
  alt: string;
};

export default function PhotoWidget({ src, alt }: PhotoWidgetProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="block size-40 rounded-[24px] object-cover"
    />
  );
}