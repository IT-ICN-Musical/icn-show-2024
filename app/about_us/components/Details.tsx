import React from "react";
import Image from "next/image";
import Buttons from "./Buttons";

type DetailsProps = { name: string; text: React.ReactNode };

export default function page(props: DetailsProps) {
  const title = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <main className="bg-[#FBF8F3] overflow-hidden">
      <div className="w-[100%] h-screen overflow-auto">
        <div className="flex w-[100%] justify-center items-center mt-[8%] space-x-[5%]">
          <Image
            className="flex object-cover"
            src={`/${props.name}.svg`}
            alt={props.name}
            width={160}
            height={160}
          />
          <p className="flex font-gyahegi text-6xl">{title}</p>
        </div>

        <div className="flex w-[100%] justify-center flex-col lg:flex-row mt-[5%] space-x-[6%] px-[10%]">
          <div className="flex lg:max-w-[60%] lg:self-start justify-center">
            <Image
              className="rounded-2xl"
              src={`/${props.name}_bg.svg`}
              alt={`${props.name}_bg`}
              width={650}
              height={650}
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 lg:max-w-[40%] lg:self-start justify-center mb-[5%] mt-10 lg:mt-0">
            {props.text}
            <div className="lg:space-x-[5%] mt-[5%]">
              <Buttons name={props.name} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
