"use client";

import { Card1, Card2, Cards } from ".";
import { Menu2 } from "../svg";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Products</h1>
          <Menu2 />
        </div>
        <div className="flex justify-center items-center gap-5 ">
          <div className="grid lg:grid-cols-5 gap-[70px] grid-cols-1 md:grid-cols-2">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};
