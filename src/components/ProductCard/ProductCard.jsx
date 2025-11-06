import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, image, title, condition, price_min, price_max } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Product Image */}
        <figure className="bg-gray-200 aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4">
          {/* Product Title */}
          <h2 className="card-title text-lg font-semibold text-gray-800 line-clamp-2">
            {product.title} [{condition}]
          </h2>

          {/* Price Range */}
          <p className="text-purple-600 font-bold text-xl mb-4">
            $ {price_min} - {price_max}
          </p>

          {/* View Details Button */}
          <div className="card-actions">
            <Link
              to={`/productDetails/${_id}`}
              className="btn btn-outline btn-block text-purple-600 hover:bg-purple-600 hover:text-white border-purple-600 rounded-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
