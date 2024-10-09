import { Menu } from "../svg";

export const Header = () => {
  return (
    <div className="">
      <div className="p-10 flex justify-around items-center bg-slate-800">
        <h4 className="text-4xl font-bold rounded-xl  border-2 border-black p-2 bg-white">
          Tuvshin's Shop
        </h4>
        <Menu />
      </div>
    </div>
  );
};
