import React, { useEffect, useRef } from "react";
import greenBg from "@/assets/greenBg.mp4";

const Water = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  });
  return (
    <>
      <div className="bg-[url('assets/bg.png')] w-screen h-screen bg-cover relative">
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
      </div>
    </>
  );
};

export default Water;
