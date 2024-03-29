import React from "react";
import { useRouter } from "next/navigation";

export default function ProductList(props) {
  const { products } = props;
  const router = useRouter();
  return (
    <div className="row">
      {products?.map((product) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1 list-product-col"
          key={product.id}
          onClick={() => router.push("/" + product.id)}
        >
          <div className="card list-product-card">
            <img
              src={product.image}
              className="list-product-img m-2"
              alt="..."
            ></img>
            <div className="card-body">
              <span className="chip primary chip-category">
                {product.category}
              </span>
              <div className="list-product-title">{product.title}</div>
              <div className="list-product-price">{"$" + product.price}</div>
              <div className="list-product-footer">
                <i className="star" />
                <span className="rating">{product.rating.rate}</span>
                <span className="divider" />
                <span className="count">
                  {product.rating.count + " review"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
