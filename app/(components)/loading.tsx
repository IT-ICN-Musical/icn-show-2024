"use client";

import Image from "next/image";
import icnLogo from "../../public/images/loading/ICN-logo.png";
import batikMinang from "../../public/images/loading/batik-minang.png";
import { useState, useEffect } from "react";

type loadingInterval = {
  interval: number;
};

export default function Loading(props: loadingInterval) {
  const [progress, setProgress] = useState<number>(0);
  const [text, setText] = useState<string>("Loading... Please wait");
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 2);
        if (progress > 65) {
          setText("Loading... Almost there");
        }
      } else {
        clearInterval(interval);
        setVisible(false);
        document.body.style.overflow = "auto";
      }
    }, props.interval / 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    visible && (
      <div>
        <Image
          className="w-screen h-screen bg-white"
          src={batikMinang}
          alt="Loading"
        />
        <div className="absolute flex flex-col inset-0 justify-center items-center">
          <Image className="mb-5" src={icnLogo} alt="ICN logo" />
          <div className="text-black text-2xl font-normal mb-16 font-gyahegi">
            Present
          </div>
          <div className="h-5 w-4/5 bg-[#7E90B7] rounded-lg mb-7">
            <div
              className="h-5 bg-blue-950 rounded-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-black text-base font-normal font-montserrat">
            {text}
          </div>
        </div>
      </div>
    )
  );
}
