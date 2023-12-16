import React from "react";

type TitleProps = { activeCard: number };

export default function Title(props: TitleProps) {
  const toggle = ["opacity-100", "opacity-0"];
  let opacity = toggle[0];

  if (props.activeCard === 0) {
    opacity = toggle[0];
  } else {
    opacity = toggle[1];
  }
  return (
    <div
      className={`${opacity} relative z-10 w-10 md:min-w-[65%] min-h-screen flex items-center justify-center`}
    >
      <p className="font-gyahegi text-[4rem] hidden md:block pl-16 pr-6">
        Our Journey
      </p>
    </div>
  );
}
