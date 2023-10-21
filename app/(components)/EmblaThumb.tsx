import Image, { StaticImageData } from "next/image";

type PropType = {
  index: number;
  selected: boolean;
  img: {
    src: StaticImageData;
    alt: string;
  };
  onClick: () => void;
  className?: string;
};

export default function EmblaThumb({
  index,
  selected,
  img,
  onClick,
  className,
}: PropType) {
  return (
    <button
      className={`embla__slide ${className} ${
        selected ? "brightness-100" : "brightness-50"
      }`}
      onClick={onClick}
      type="button"
    >
      <Image
        className={`aspect-[2/3] object-cover rounded-2xl`}
        src={img.src}
        alt={img.alt}
      />
    </button>
  );
}
