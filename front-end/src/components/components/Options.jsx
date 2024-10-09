export const Options = ({ name }) => {
  return (
    <div className="w-full h-14 flex items-center rounded-lg bg-[#F4F4F4]">
      <select
        id="Ангилал"
        className="w-full bg-[#F4F4F4] p-3 text-[#8B8E95] "
        name={name}
      >
        <option disabled selected hidden>
          Ангилал
        </option>
        <option value="Цамц">Цамц</option>
        <option value="Өмд">Өмд</option>
        <option value="Гадуур хувцас">Гадуур хувцас</option>
        <option value="Гутал">Гутал</option>
      </select>
    </div>
  );
};
