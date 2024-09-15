import { useEffect, useRef } from "react";
import InfiniteLooper from "./InfiniteLooper";
import greenBg from "@/assets/greenBg.mp4";
const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  });
  return (
    <div className="bg-[url('assets/bg.png')] w-screen h-[30vh] bg-cover relative">
      <div className="flex flex-col z-50">
        <div className="flex justify-between w-screen  *:text-white *:font-display z-50 mt-16 mb-8 px-8">
          <h1 className="text-4xl opacity-100">Photosynthespace.</h1>
          <p className="text-2xl">Zaid, Stanley, Kelly, MeiHua</p>
        </div>
        <InfiniteLooper
          speed={5}
          direction="right"
          children={
            <h1 className="text-white font-display font-medium text-xl mx-2 uppercase mt-4 opacity-40">
              Photosynthespace
            </h1>
          }
        />
      </div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="top-0 w-screen object-cover object-center h-full opacity-80 absolute z-0"
      >
        <source src={greenBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Footer;
