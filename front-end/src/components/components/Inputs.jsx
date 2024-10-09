export const Inputs = ({ placeholder, name }) => {
  return (
    <div className="w-full h-14 flex items-center rounded-lg bg-[#F4F4F4]">
      <input
        type="text"
        className="outline-none w-full bg-[#F4F4F4] p-3 text-[#8B8E95]"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
