import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div className="mt-24">
      <h2 className="text-center text-[48px] font-bold mb-12">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
