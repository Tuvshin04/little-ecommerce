import { Inputs, Options } from "../components";

export const Menu3 = () => {
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
          <li>
            <a
              className="tooltip"
              data-tip="Бараа нэмэх
"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus"
                className
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </a>
          </li>
        </ul>
      </button>
      <div className="flex gap-1 items-center">
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <div className="flex justify-center items-center p-4">
              <p className="font-bold text-2xl">Бараа нэмэх</p>
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
                  <p className="font-normal text-base text-[#fff]">нэмэх</p>
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};
