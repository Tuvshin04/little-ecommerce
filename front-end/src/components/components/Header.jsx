import { Menu } from "../svg";

export const Header = () => {
  return (
    <div className="">
      <div className="p-10 flex justify-around items-center">
        <h4 className="text-4xl font-bold">Tuvshin's Shop</h4>
        <Menu />
      </div>
    </div>
  );
};
