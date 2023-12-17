"use client";
import Button from "@/app/(components)/Button";
import { FadeUp } from "@/app/(components)/FadeUp";

export default function Failure() {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-[100%] h-screen bg-cover bg-center">
      <div className="h-screen w-[100%] flex justify-center items-center">
        <FadeUp x={0} duration={0.5}>
          <div>
            <div className="flex font-gyahegi text-4xl md:text-5xl text-black pb-10 items-center justify-center">
              <p>Oh No..</p>
            </div>
            <div className="flex justify-center font-serif text-xl md:text-2xl text-black mb-4">
              Your Purchase is Unsuccessful
            </div>
            <div className="px-5">
              <p className="mb-2 font-bold px-5">
                For Further Information, Please Contact:
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
