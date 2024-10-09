"use client";

import { Inputs, Options } from ".";
import { DeleteIcon, EditIcon } from "../svg";

export const Cards = () => {
  return (
    <div className="max-w-[320px] border p-4 rounded-xl flex flex-col gap-1">
      <div className="flex justify-between">
        <p className="font-bold text-2xl not-italic"> Бараа</p>
        <div className="flex gap-1 items-center">
          <DeleteIcon />
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <EditIcon />
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <div className="flex justify-center items-center p-4">
                <p className="font-bold text-2xl">Бараа засах</p>
              </div>
              <div className="w-full p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[#121316] font-normal text-sm ">
                    Барааны нэр
                  </p>
                  <Inputs placeholder={"Барааны нэр"} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#121316] font-normal text-sm">
                    Барааны ангилал
                  </p>
                  <Options />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#121316] font-normal text-sm">Үнэ</p>
                  <Inputs placeholder={"Үнэ"} />
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-3">
                  <button className="btn">Буцах</button>
                  <button className="bg-[#393939] hover:bg-black duration-400 px-4 py-2 rounded-lg">
                    <p className="font-normal text-base text-[#fff]">Засах</p>
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="flex gap-1 items-center text-[#393939]">
        Барааны нэр :
        <p className="font-semibold not-italic text-base text-[#393939]"></p>
      </div>
      <div className="flex gap-1 items-center text-[#393939]">
        Барааны ангилал :
        <p className="font-semibold not-italic text-base text-[#393939]"></p>
      </div>
      <div className="flex gap-1 items-center text-[#393939]">
        Үнэ :
        <p className="font-semibold not-italic text-base text-[#393939]"></p>
      </div>
    </div>
  );
};
