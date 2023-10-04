"use client";
import Image from "next/image";
import bgImgBatik from "../../public/images/footer/batikminang.png";
import icnLogo from "../../public/images/footer/ICN-logo-white.png";
import instagram from "../../public/images/footer/ig-button.png";
import facebook from "../../public/images/footer/facebook-button.png";
import youtube from "../../public/images/footer/youtube-button.png";

export default function Footer() {
  return (
    <div className="relative">
      <Image
        className="w-screen h-24 bg-gray-900 opacity-50e"
        src={bgImgBatik}
        alt="Batik Minang"
        objectFit="cover"
      />
      <div className="flex absolute inset-0 flex items-center justify-between px-48">
        <Image src={icnLogo} alt="ICN logo" />
        <div className="flex1 flex w-72 items-center justify-between">
          <Image src={instagram} alt="Instagram Button" />
          <Image src={facebook} alt="Facebook Button" />
          <Image src={youtube} alt="Youtube Button" />
        </div>
        <div className="flex rounded-lg border border-white shadow-lg w-36 h-9 items-center justify-center transition duration-300 ease-in-out hover:bg-white hover:text-black ">
          Buy Tickets
        </div>
      </div>
    </div>
  );
}
