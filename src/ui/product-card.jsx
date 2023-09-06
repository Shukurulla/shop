const ProductCard = ({ thumbnail, title, price, description, id }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="img-box">
        <img src={thumbnail} alt="" className="w-100" />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text">{description}</p>

        <div className="d-flex  justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Buy
            </button>
          </div>
          <small className="text-body-secondary">{price}$</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
