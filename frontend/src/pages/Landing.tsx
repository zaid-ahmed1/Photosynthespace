import React, { useEffect, useRef } from "react";
import greenBg from "@/assets/greenBg.mp4";
import InfiniteLooper from "@/components/InfiniteLooper";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  });

  const nav = useNavigate();
  return (
    <div>
      <div className="bg-[url('assets/bg.png')] w-screen h-screen bg-cover">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="top-0 w-[100vw] object-cover object-center hidden xs:flex h-[100vh] opacity-80 absolute z-0"
        >
          <source src={greenBg} type="video/mp4" />
        </video>
        <div className="z-40 w-screen h-screen flex flex-col relative justify-center ml-30">
          <h1 className="text-white font-semibold text-5xl w-[50rem]">
            Meet Photosynthespace, the <span>sunlight</span> to your{" "}
            <span>goals</span>.
          </h1>
          <p className="text-white font-medium text-3xl mt-4">
            Plant the seeds of your goals. Stay on track and watch them blossom
            with Mixed Reality.
          </p>
          <Button
            text="Start"
            className="w-48 py-2.5 mt-16 rounded-15 flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
