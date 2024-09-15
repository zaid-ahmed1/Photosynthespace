import { useEffect, useRef, useState } from "react";
import greenBg from "@/assets/greenBg.mp4";
import Button from "@/components/Button";
import plant from "@/assets/plant.webp";
import sprout from "@/assets/sprout.webp";
import treeish from "@/assets/treeish.webp";
import Carousel from "@/components/Carousel";
const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  });

  const images = [
    <img src={sprout} className="w-32 h-32" />,
    <img src={plant} className="w-80 h-80 translate-x-24" />,
    <img src={treeish} className="w-96 h-96 translate-x-36" />,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

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
        <div className="z-40 w-screen h-screen flex flex-col relative justify-center pl-30">
          <h1 className="text-white font-semibold text-5xl w-[50rem]">
            Meet Photosynthespace, the{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#ECDF30,white)] bg-[length:200%_auto] animate-gradient">
              sunlight
            </span>{" "}
            to your{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,white,#29B57F,white)] bg-[length:200%_auto] animate-gradient">
              goals
            </span>
            .
          </h1>
          <p className="text-white font-medium text-2xl mt-4">
            Plant the seeds of your goals. <br /> Stay on track and watch them
            blossom with Mixed Reality.
          </p>

          <Button
            text="Start"
            className="w-48 py-2.5 mt-16 rounded-15 flex justify-center items-center uppercase font-medium"
            size="base"
          />
          <div className="flex justify-center items-center absolute right-40 z-50">
            {images[currentImageIndex]}
          </div>
        </div>
      </div>

      <div className="pt-25 w-screen flex justify-content items-center px-4">
        <Carousel />
      </div>
    </>
  );
};

export default Landing;
