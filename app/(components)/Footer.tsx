"use client";
import Image from "next/image";
import bgImgBatik from "../../public/images/footer/batikminang.png";
import icnLogo from "../../public/images/footer/ICN-logo-white.png";
import instagram from "../../public/images/footer/ig-button.png";
import facebook from "../../public/images/footer/facebook-button.png";
import youtube from "../../public/images/footer/youtube-button.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../store/(components)/(utils)/HoverCard";

export default function Footer() {
  return (
    <div className="relative">
      <Image
        className="w-screen h-24 bg-gray-900 opacity-50e object-cover"
        src={bgImgBatik}
        alt="Batik Minang"
      />
      <div className="flex absolute inset-0 items-center justify-between px-5 md:px-10 lg:px-44">
        <Image src={icnLogo} alt="ICN logo" className="w-20 mx-2" />
        <div className="flex1 flex w-72 items-center justify-between px-4">
          <Image
            src={instagram}
            alt="Instagram Button"
            className="w-10 sm:w-14"
          />
          <Image
            src={facebook}
            alt="Facebook Button"
            className="w-10 sm:w-14"
          />
          <Image src={youtube} alt="Youtube Button" className="w-10 sm:w-14" />
        </div>
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex rounded-lg border border-white text-white font-montserrat shadow-lg w-36 h-9 items-center justify-center transition duration-300 ease-in-out hover:bg-white hover:text-black text-xs sm:text-sm">
              Contact Us
            </div>
          </HoverCardTrigger>
          <HoverCardContent align="start" side="top">
            <p className="mb-1 font-bold">Contact Us:</p>

            <p className="mb-2">
              <span className="font-semibold">Keiko Renata</span> <br />{" "}
              Telegram: @keikorenata <br />
              Whatsapp: +65 87903093
            </p>
            <p>
              <span className="font-semibold">Andrew Nyco</span> <br />{" "}
              Telegram: @andrewnyco <br />
              Whatsapp: +65 88848001
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
