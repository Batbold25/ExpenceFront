import React from "react";
import { MainLogo } from "./Icons/MainLogo";

export const Wait = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <MainLogo width="45" hieght="44" />
          <h1 className=" text-4xl font-bold">Geld</h1>
        </div>
        <div className="flex flex-col items-center ">
          <span className="loading loading-spinner loading-lg "></span>
          <h2>Түр хүлээнэ үү...</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};
