"use client";

import { useState } from "react";
import ProductsDrawer from "./Drawer";

function ProductFilters() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFilters(true)}>Filter</button>
      <ProductsDrawer
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
}

export default ProductFilters;
