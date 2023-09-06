import { useContext } from "react";
import { Context } from "../context";
import { useParams } from "react-router-dom";
import ProductCard from "../ui/product-card";

const SelectProducts = () => {
  const { data } = useContext(Context);
  const { products } = data;
  const { id } = useParams();
  const product = products?.filter((c) => c.category == id);
  return product.length == 0 ? (
    <p>No result</p>
  ) : (
    <div>
      <div className="row">
        {product.map((item) => (
          <div className="col-lg-4 mt-3 col-md-6 col-sm-12" key={item.title}>
            <ProductCard
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              id={item.id}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectProducts;
