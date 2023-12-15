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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="h-screen w-full bg-slate-500 relative"
      onClick={() => setOpenWindow(true)}
    >
      <Image
        src="/images/landing-page/landing bg.png"
        className="object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <Image
        src="/images/landing-page/landing bunga.png"
        className="object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <Image
        src="/images/landing-page/landing cloud.png"
        className="object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <Image
        src="/images/landing-page/landing percik kecil.png"
        className="object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <Image
        src="/images/landing-page/landing smoke.png"
        className="object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <Image
        src="/images/landing-page/landing star.png"
        className="animate-pulse object-cover"
        alt="background"
        fill={true}
        layout="fill"
      />
      <div
        className={clsx(
          "absolute left-2/4 -translate-x-2/4 bottom-[5%] transition-opacity duration-1000",
          openWindow && "opacity-0"
        )}
      >
        <h2 className="text-lg md:text-2xl font-bold text-[#9b5773]">
          Click to Continue
        </h2>
      </div>
      <div
        className={clsx(
          "absolute left-2/4 -translate-x-2/4 bottom-[5%] transition-opacity duration-1000",
          !scrollable && "opacity-0"
        )}
      >
        <h2 className="text-lg md:text-2xl font-bold text-[#9b5773]">
          Scroll Down
        </h2>
      </div>
      <Window>
        <div className="bg-white w-screen h-screen">
          <Image
            src="/images/landing-page/landing bg jendelalangit.png"
            alt="jendelalangit"
            fill={true}
            className="scale-[1.4] translate-x-[1%] translate-y-[4%] object-cover"
          />
          <Image
            src="/images/landing-page/gedung.png"
            alt="gedung"
            fill={true}
            className="scale-[1.35] translate-y-[6%] object-cover"
          />
          <Image
            src="/images/landing-page/kaharsa-logo.png"
            alt="kaharsa-logo"
            width={0}
            height={0}
            unoptimized
            ref={logoRef}
            className={clsx(
              "absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 w-max max-w-none duration-1000 ease-in-out transition-[transform_opacity] object-cover",
              openWindow
                ? "scale-[40%] sm:scale-50 lg:scale-[70%] opacity-100 delay-[1500ms]"
                : "scale-[20%] sm:scale-25 md:scale-50 opacity-0"
            )}
          />
          <Image
            src="/images/landing-page/gorden kiri.png"
            alt="gordenkiri"
            fill={true}
            className={clsx(
              "scale-[1.4] translate-y-[4%] transition-transform duration-1000 ease-in-out object-cover",
              openWindow ? "-translate-x-[35%]" : "translate-x-[1%]"
            )}
          />
          <Image
            src="/images/landing-page/gorden kanan.png"
            alt="gordenkanan"
            fill={true}
            className={clsx(
              "scale-[1.4] translate-y-[4%] transition-transform duration-1000 ease-in-out object-cover",
              openWindow ? "translate-x-[35%]" : "translate-x-[1%]"
            )}
          />
        </div>
      </Window>
    </div>
  );
}
