import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

type PropType = {
  index: number;
  selected: boolean;
  shrinked: boolean | undefined;
  img: {
    src: StaticImageData;
    alt: string;
  };
  onClick: () => void;
  className?: null | string;
};

export default function EmblaThumb({
  selected,
  shrinked,
  img,
  onClick,
  className,
}: PropType) {
  const shrinkRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Using CSS animations because cannot get Framer Motion to work with Embla
    if (shrinked) {
      shrinkRef.current?.classList.remove("unshrink");
      shrinkRef.current?.classList.add("shrink");
    } else if (shrinked === false) {
      shrinkRef.current?.classList.remove("shrink");
      shrinkRef.current?.classList.add("unshrink");
    }
  }, [shrinked]);

  return (
    <button
      className={`embla__slide embla__slide__thumb ${className} ${
        selected ? "brightness-100" : "brightness-50"
      }`}
      onClick={onClick}
      type="button"
    >
      {selected && !shrinked && (
        <div className="fixed top-[45%] text-white font-semibold font-gyahegi text-[12px]">
          Double Click to See More
        </div>
      )}
      <Image
        ref={shrinkRef}
        className={`aspect-[2/3] object-cover rounded-2xl`}
        src={img.src}
        alt={img.alt}
      />
    </button>
  );
}
