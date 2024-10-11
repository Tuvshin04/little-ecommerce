"use client";

export const Cards = () => {
  return (
    <div className="w-[300px] md:w-[200px] border p-4 rounded-xl flex flex-col gap-1 hover:shadow-xl hover:shadow-slate-800">
      <div className="flex justify-between ">
        <div>
          <div className="flex justify-between">
            <p className="font-bold text-2xl not-italic">Product</p>
          </div>
          <figure>
            <img
              src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg?impolicy=myresize&rw=500"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cruser Harley Devidson</h2>
            <h1>99827$</h1>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-[200px] md:w-[100px] md:line-clamp-3 md:text-xs">
                Шоппинг карт д нэмэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
