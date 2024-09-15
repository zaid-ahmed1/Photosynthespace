import React, { useEffect, useRef, useState } from "react";
import greenBg from "@/assets/greenBg.mp4";

const Water = () => {
  const [isLoading, setIsLoading] = useState(0);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading(1);
    }, 3000);

    const timer2 = setTimeout(() => {
      setIsLoading(2);
    }, 5800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="bg-[url('assets/green1.jpg')] w-screen h-screen bg-cover relative">
        <div className="z-40 w-screen h-screen flex flex-col relative justify-center pl-30">
          {isLoading === 0 && (
            <h1 className="text-white font-semibold text-5xl w-[50rem]">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#ECDF30,white)] bg-[length:200%_auto] animate-gradient">
                Searching for Meta Quest...
              </span>
            </h1>
          )}
          {isLoading === 1 && (
            <h1 className="text-white font-semibold text-5xl w-[50rem]">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#ECDF30,white)] bg-[length:200%_auto] animate-gradient">
                Found! Now connecting...
              </span>
            </h1>
          )}
          {isLoading === 2 && (
            <h1 className="text-white font-semibold text-5xl w-[50rem]">
              Connected to your{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#ECDF30,white)] bg-[length:200%_auto] animate-gradient">
                Meta Quest 3!
              </span>
              <br />
              Get ready to tend to your{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#29B57F,white)] bg-[length:200%_auto] animate-gradient">
                goals and plants!
              </span>
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Water;
