"use client";

import clsx from "clsx";
import Image from "next/image";
import style from "./Window.module.css";

export type WindowPropType = {} & React.ComponentPropsWithoutRef<"div">;

function Window({ children, className, ...rest }: WindowPropType) {
  return (
    <div className={clsx("w-full h-full overflow-hidden", className)} {...rest}>
      <div className="relative w-full h-full">
        <div
          className={clsx(
            "absolute",
            "w-[100%] h-[71.111vw] max-h-[100%] max-w-[140.625vh]",
            "m-auto top-0 bottom-0 left-0 right-0"
          )}
        >
          <div className="absolute top-2/4 left-2/4 -translate-x-[49.5%] -translate-y-[54.2%] w-[37%] h-[70%]">
            <div className="relative w-full h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>

        <Image
          src="/assets/landing-page/landing frame.png"
          alt="test"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Window;
