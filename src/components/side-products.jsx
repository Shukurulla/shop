import { useState } from "react";
import ProductCard from "../ui/product-card";

const SideProducts = () => {
  const data = JSON.parse(localStorage.getItem("product"));
  const sliceProduct1 = data.slice(0, data.length - 20);
  const sliceProduct2 = data.slice(10, data.length - 10);
  const sliceProduct3 = data.slice(20, data.length - 0);
  const [products, setProducts] = useState(sliceProduct1);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {products.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={item.title}>
          <ProductCard
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            description={item.description}
          />
        </div>
      ))}
      <div className="col-lg-12 text-center">
        <div className="btn-group">
          <div className="btn-group">
            <button
              className="btn btn-outline-primary"
              onClick={() => setProducts(sliceProduct1)}
            >
              1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => setProducts(sliceProduct2)}
            >
              2
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => setProducts(sliceProduct3)}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProducts;
