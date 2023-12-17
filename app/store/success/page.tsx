"use client";
import Button from "@/app/(components)/Button";
import { FadeUp } from "@/app/(components)/FadeUp";

export default function Success() {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-[100%] h-screen bg-cover bg-center">
      <div className="h-screen w-[100%] flex justify-center items-center">
        <FadeUp x={0} duration={0.5}>
          <div>
            <div className="flex font-gyahegi text-4xl md:text-5xl text-black pb-10 items-center justify-center">
              <p>Thank You</p>
            </div>
            <div className="flex justify-center font-serif text-xl md:text-2xl text-black mb-4">
              For Your Purchase
            </div>
            <div className="px-5">
              <p className="flex mb-2 font-bold px-5 flex-wrap">
                The tickets will arrive within 24 hours. <br /> If You could not
                find your tickets, please check your spam/junk folder.
                <br />
              </p>
              <p className="mx-5 my-2 font-bold">
                Should you have any problems, please contact:
              </p>
              <div className="flex flex-col sm:flex-row">
                <p className="mb-2 px-5">
                  <span className="font-semibold">Keiko Renata</span> <br />{" "}
                  Telegram: @keikorenata <br />
                  Whatsapp: +65 87903093
                </p>
                <p className="mb-2 px-5">
                  <span className="font-semibold">Andrew Nyco</span> <br />{" "}
                  Telegram: @andrewnyco <br />
                  Whatsapp: +65 88848001
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="px-2">
                <Button url="" color="dark" animate="animate">
                  Home
                </Button>
              </div>
              <div className="px-2">
                <Button url="store" color="dark" animate="animate">
                  Back to Store
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
