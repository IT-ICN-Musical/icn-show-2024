import { Link } from "framer";
import React from "react";

type Props = {
  url: string;
  children: string;
  animate?: string;
  color?: string;
  outsideURL?: boolean;
};

export default function Button(prop: Props) {
  return (
    <Link href={`${prop.outsideURL ? prop.url : "/" + prop.url}`}>
      <a
        className={`text-center px-5 py-1 font-normal leading-normal rounded-[0.5rem] transition-colors duration-300 ease-in-out
                    ${prop.color === "dark" ? "text-white bg-[#092054]" : ""} ${
                      prop.animate === "animate"
                        ? "border-white border-[1px] hover:text-[#e8c67a] hover:border-[#e8c67a]"
                        : "hover:bg-gray-900/10"
                    }`}
      >
        {prop.children}
      </a>
    </Link>
  );
}
