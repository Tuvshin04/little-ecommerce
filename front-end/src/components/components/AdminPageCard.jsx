"use client";

import { Inputs, Options } from ".";
import { EditIcon } from "../svg";

export const AdminPageCard = () => {
  return (
    <div className="max-w-[320px] border p-4 rounded-xl flex flex-col gap-1 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-2xl">Product</p>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <EditIcon />
            </button>
          </div>
          <figure className="relative overflow-hidden rounded-lg">
            <img
              src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg?impolicy=myresize&rw=500"
              alt="Harley Davidson Motorcycle"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </figure>
          <div className="card-body mt-4">
            <h2 className="card-title text-xl font-semibold">
              Cruiser Harley Davidson
            </h2>
            <h1 className="text-lg font-bold text-gray-900">$99,827</h1>
            <div className="card-actions justify-end mt-2"></div>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="flex justify-center items-center p-4">
                <p className="font-bold text-2xl">Бараа засах</p>
              </div>
              <div className="w-full p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[#121316] font-normal text-sm">
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
    </div>
  );
};
