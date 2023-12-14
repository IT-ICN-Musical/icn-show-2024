"use client";
import Image from "next/image";
import Synopsis from "./components/Synopsis";
import Window from "./components/Window";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      <div className="h-screen w-full bg-slate-500">
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
                isOpen
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
                isOpen && "-translate-x-[35%]"
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
                isOpen && "translate-x-[35%]"
              )}
            />
          </div>
        </Window>
      </div>
      <Synopsis />
    </>
  );
}
