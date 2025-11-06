import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromise = fetch("http://localhost:3000/latestProducts").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <div className="mt-24">
        <h2 className="text-center text-[48px] font-bold mb-12">
          Latest <span className="text-primary">Products</span>
        </h2>
        <div>
          <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
      </div>
    </div>
  );
};

export default Home;
