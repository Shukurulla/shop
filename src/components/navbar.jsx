import { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { productLength } = useContext(Context);
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="navigation ">
        <Link to={"/basket"}>
          <i className="bi bi-cart">
            <span>{productLength}</span>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
