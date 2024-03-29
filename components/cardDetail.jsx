import React from "react";

export default function CardDetail(props) {
  const { product } = props;
  return (
    <div className="card detail-product-card">
      <div className="row">
        <div className="col-12 col-sm-6 px-1">
          <span className="chip primary detail-chip-category">
            {product?.category}
          </span>
          <img
            src={product?.image}
            className="w-100 detail-product-img"
            alt="..."
          />
        </div>
        <div className="col-12 col-sm-6 px-1">
          <div className="detail-product-title">{product?.title}</div>
          <div className="detail-product-bar">
            <i className="star" />
            <span className="rating">{product?.rating?.rate}</span>
            <span className="divider" />
            <span className="count">{product?.rating?.count + " review"}</span>
          </div>
          <div className="detail-product-price">{"$" + product?.price}</div>
          <div className="detail-product-desc">
            <div className="desc-title">Description:</div>
            <div className="desc-content">{product?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
