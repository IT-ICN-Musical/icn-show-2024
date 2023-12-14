import Image from "next/image";
import Window from "./Window";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export type LandingPageType = {
  openWindow: boolean;
  scrollable: boolean;
  setOpenWindow: (value: boolean) => void;
  setScrollable: (value: boolean) => void;
};

export default function LandingPage({
  openWindow,
  scrollable,
  setOpenWindow,
  setScrollable,
}: LandingPageType) {
  const logoRef = useRef<HTMLImageElement>(null);

  // setscroll to true once logo has finished animation
  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.addEventListener("transitionend", () => {
        setScrollable(true);
      });
    }
  }, [logoRef.current]);
  return (
    <div
      className="h-screen w-full bg-slate-500"
      onClick={() => setOpenWindow(true)}
    >
      <Image
        src="/assets/landing-page/landing bg.png"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <Image
        src="/assets/landing-page/landing bunga.png"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <Image
        src="/assets/landing-page/landing cloud.png"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <Image
        src="/assets/landing-page/landing percik kecil.png"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <Image
        src="/assets/landing-page/landing smoke.png"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <Image
        src="/assets/landing-page/landing star.png"
        className="animate-pulse"
        alt="background"
        fill={true}
        objectFit="cover"
        layout="fill"
      />
      <div
        className={clsx(
          "absolute left-2/4 -translate-x-2/4 bottom-[5%] transition-opacity duration-1000",
          openWindow && "opacity-0"
        )}
      >
        <h2 className="text-lg md:text-2xl font-bold">Click to Continue</h2>
      </div>
      <div
        className={clsx(
          "absolute left-2/4 -translate-x-2/4 bottom-[5%] transition-opacity duration-1000",
          !scrollable && "opacity-0"
        )}
      >
        <h2 className="text-lg md:text-2xl font-bold">Scroll Down</h2>
      </div>
      <Window>
        <div className="bg-white w-screen h-screen">
          <Image
            src="/assets/landing-page/landing bg jendelalangit.png"
            alt="test"
            fill={true}
            unoptimized
            objectFit="cover"
            className="scale-[1.4] translate-x-[1%] translate-y-[4%]"
          />
          <Image
            src="/assets/landing-page/gedung.png"
            alt="test"
            fill={true}
            unoptimized
            objectFit="cover"
            className="scale-[1.35] translate-y-[3%]"
          />
          <Image
            src="/assets/landing-page/icn-logo.png"
            alt="test"
            width={0}
            height={0}
            unoptimized
            ref={logoRef}
            objectFit="cover"
            className={clsx(
              "absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 w-3/6 duration-1000  ease-in-out transition-[transform_opacity]",
              openWindow
                ? "scale-100 opacity-100 delay-[1500ms]"
                : "scale-50 opacity-0"
            )}
          />
          <Image
            src="/assets/landing-page/gorden kiri.png"
            alt="test"
            fill={true}
            unoptimized
            objectFit="cover"
            className={clsx(
              "scale-[1.4] translate-y-[4%] transition-transform duration-1000 ease-in-out",
              openWindow ? "-translate-x-[35%]" : "translate-x-[1%]"
            )}
          />
          <Image
            src="/assets/landing-page/gorden kanan.png"
            alt="test"
            fill={true}
            unoptimized
            objectFit="cover"
            className={clsx(
              "scale-[1.4] translate-y-[4%] transition-transform duration-1000 ease-in-out",
              openWindow ? "translate-x-[35%]" : "translate-x-[1%]"
            )}
          />
        </div>
      </Window>
    </div>
  );
}
