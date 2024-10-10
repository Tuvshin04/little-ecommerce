"use client";

import { AdminPageCard } from ".";
import { Menu3 } from "../svg";

export const AdminPageHero = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Products</h1>
          <Menu3 />
        </div>
        <div className="flex justify-start items-center gap-5 ">
          <div className="grid lg:grid-cols-5 gap-[70px] grid-cols-1 md:grid-cols-2">
            <AdminPageCard />
          </div>
        </div>
      </div>
    </div>
  );
};
