import React from "react";
import Image from "next/image";
import Supported_by from "./Supported_by";
import { FlyInLeft } from "./FlyInLeft";
import { FlyInRight } from "./FlyinRight";
import { FadeUp } from "./FadeUp";
import MediaPartners from "./MediaPartners";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";

export default function Synopsis() {
  return (
    <main className="bg-[#FBF8F3]">
      <div className="h-screen w-[100%] flex justify-center items-center">
        <div className="lg:w-[40%] w-2/3">
          <FadeUp x={0} duration={0.4}>
            <p className="text-center text-lg">
              Galih, fueled by a fervent desire for fame, sets out on a journey
              to Jakarta, leaving behind the familiarity of home. Alongside his
              sister Laras' pursuit of acting dreams, their divergent paths
              unfold against the backdrop of Indonesia's burgeoning music scene
              in the 1970s. As Galih faces harsh realities and shattered
              illusions in pursuit of stardom, will he discover that true
              fulfillment lies not in fame but in embracing the present moment?
              His journey raises a poignant question: Can one reconcile ambition
              with the simple joy of living?
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="h-screen w-[100%] flex justify-center items-center px-[5%]">
        <div className="flex justify-center flex-col lg:flex-row items-center space-x-[6%]">
          <FlyInLeft>
            <div className="flex w-[100%] h-full">
              <Image src="/web1.svg" alt="image 1" width={761} height={535} />
            </div>
          </FlyInLeft>

          <div className="flex lg:w-[30%] w-2/3 justify-center items-center">
            <FlyInRight>
              <div className="pt-12 lg:pt-0">
                <p className="font-gyahegi text-header text-2xl text-center text-[#E8C67A]">
                  In the beginning...
                </p>
                <p className="mt-5 text-lg text-center">
                  Galih, a young boy from a small village in Minangkabau, has an
                  unwavering passion for music and dreams of becoming a pop
                  star.
                </p>
              </div>
            </FlyInRight>
          </div>
        </div>
      </div>

      <div className="h-screen w-[100%] flex justify-center items-center lg:pl-[10%] px-[5%]">
        <div className="flex justify-center flex-col-reverse lg:flex-row items-center space-x-[6%]">
          <div className="flex lg:w-[30%] w-2/3 justify-center items-center">
            <FlyInLeft>
              <div className="pt-12 lg:pt-0">
                <p className="font-gyahegi text-header text-2xl text-center text-[#E8C67A]">
                  As the journey continues...
                </p>
                <p className="mt-5 text-lg text-center">
                  Inspired by his sister, Laras, he sets off on a journey to
                  Jakarta to pursue his career in the entertainment industry.
                  However, he quickly realizes that the city is not as glamorous
                  as he had envisioned. Despite his best efforts, Galih
                  struggles to capture the attention of record labels and loses
                  sight of his life's purpose.
                </p>
              </div>
            </FlyInLeft>
          </div>

          <FlyInRight>
            <div className="flex w-[100%] h-full">
              <Image src="/web2.svg" alt="image 2" width={760} height={483} />
            </div>
          </FlyInRight>
        </div>
      </div>

      <div className="h-screen w-[100%] flex justify-center items-center px-[5%]">
        <div className="flex justify-center flex-col lg:flex-row items-center space-x-[6%]">
          <FlyInLeft>
            <div className="flex w-[100%] h-full">
              <Image src="/web3.svg" alt="image 3" width={760} height={482} />
            </div>
          </FlyInLeft>

          <div className="flex lg:w-[30%] w-2/3 justify-center items-center">
            <FlyInRight>
              <div className="pt-12 lg:pt-0">
                <p className="font-gyahegi text-header text-2xl text-center text-[#E8C67A]">
                  Finally...
                </p>
                <p className="mt-5 text-lg text-center">
                  To make matters worse, Galih discovers that his sister's
                  success may not be what it seems. Nevertheless, with the help
                  of his new friends that he befriended along the way, Galih
                  learns to reconcile with life and reassess what it means to
                  live.
                </p>
              </div>
            </FlyInRight>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-fit md:h-screen flex justify-center items-center mt-10 pb-10 sm:pb-0 sm:mt-0">
        <div className="w-[1000px] flex flex-col space-y-[40px]">
          <p className="font-gyahegi text-body text-[32px] text-center font-bold">
            Platinum Sponsors
          </p>
          <PlatinumSponsors />
        </div>
      </div>
      <div className="w-[100%] h-fit md:h-screen flex justify-center items-center mt-10 pb-10 sm:pb-0 sm:mt-0">
        <div className="w-[1000px] flex flex-col space-y-[40px]">
          <p className="font-gyahegi text-body text-[32px] text-center font-bold">
            Gold Sponsors
          </p>
          <GoldSponsors />
        </div>
      </div>
      <div className="w-[100%] h-fit md:h-[50vh] flex justify-center items-center mt-10 pb-10 sm:pb-0 sm:mt-0">
        <div className="w-[850px] flex flex-col space-y-[40px]">
          <p className="font-gyahegi text-body text-[32px] text-center font-bold">
            Supported By
          </p>
          <Supported_by />
        </div>
      </div>
      <div className="w-[100%] h-fit md:h-[50vh] flex justify-center items-center mt-10 pb-10 md:pb-0 md:mt-0">
        <div className="w-[850px] flex flex-col space-y-[40px]">
          <p className="font-gyahegi text-body text-[32px] text-center font-bold">
            Media Partners
          </p>
          <MediaPartners />
        </div>
      </div>
    </main>
  );
}
