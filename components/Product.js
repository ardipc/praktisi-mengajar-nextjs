import Link from "next/link";

const changeRp = (value) => {
  return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

const Product = ({ item }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>{item.category_id.name}</div>
        {/* Product image*/}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* Product details*/}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name*/}
            <h5 className="fw-bolder">{item.name}</h5>
            {/* Product price*/}
            {changeRp(item.price)}
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              className="btn btn-outline-dark mt-auto"
              href={`/produk/${item._id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
