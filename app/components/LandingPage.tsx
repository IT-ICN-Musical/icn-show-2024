import Image from "next/image";
import Window from "./Window";
import clsx from "clsx";

export type LandingPageType = {
  openWindow: boolean;
  setOpenWindow: (value: boolean) => void;
};

export default function LandingPage({
  openWindow,
  setOpenWindow,
}: LandingPageType) {
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
              "scale-[1.4] translate-x-[1%] translate-y-[4%] transition-transform duration-1000 ease-in-out",
              openWindow && "-translate-x-[35%]"
            )}
          />
          <Image
            src="/assets/landing-page/gorden kanan.png"
            alt="test"
            fill={true}
            unoptimized
            objectFit="cover"
            className={clsx(
              "scale-[1.4] translate-x-[1%] translate-y-[4%] transition-transform duration-1000 ease-in-out",
              openWindow && "translate-x-[35%]"
            )}
          />
        </div>
      </Window>
    </div>
  );
}
