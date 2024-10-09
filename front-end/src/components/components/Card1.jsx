export const Card1 = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-low-rider-st/2024-low-rider-st-m08b/360/2024-low-rider-st-m08b-motorcycle-01.jpg?impolicy=myresize&rw=1600"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cruser Harley Devidson</h2>
        <p>99999$</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ADD Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};
