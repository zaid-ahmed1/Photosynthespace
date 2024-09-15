import React from "react";
import InfiniteLooper from "./InfiniteLooper";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col fixed top-0 left-0 z-50 w-screen opacity-80">
      <InfiniteLooper
        speed={5}
        direction="right"
        children={
          <h1 className="text-white font-display font-medium text-xl mx-2 uppercase mt-4 opacity-40">
            Photosynthespace
          </h1>
        }
      />
      <div className="z-30 flex justify-between items-center px-16 py-2">
        <h1 className="text-4xl text-white font-semibold font-display uppercase mb-1">
          Photosynthespace
        </h1>
        <div className="flex items-center justify-center gap-16 *:text-white *:font-display *:uppercase *:font-medium *:text-lg *:cursor-pointer">
          <Button text="Home" onClick={() => nav("/")} />
          <Button text="Plant" onClick={() => nav("/plant")} />
          <Button text="Water" onClick={() => nav("/water")} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
