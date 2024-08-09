import React from "react";
import { useProducts } from "../../../hooks";
import TrendingProducts from "../../../components/TrendingProducts";

function TrendingProductsSection() {
  const { products } = useProducts(4);

  return (
    <div className="pb-20">
      <TrendingProducts products={products} />
    </div>
  );
}

export default TrendingProductsSection;
