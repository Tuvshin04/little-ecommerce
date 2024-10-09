export const Card2 = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg?impolicy=myresize&rw=500"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cruser Harley Devidson</h2>
        <p>99082$</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ADD Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};
