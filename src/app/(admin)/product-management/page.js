"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProductByUser } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import Link from "next/link";

function ProductManagementPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByUser()
      .then((response) => setProducts(response.data))
      .catch((error) => toast.error(error.response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-5">
      <div className="flex items-center justify-between pb-5 px-3">
        <h1 className="font-semibold text-2xl dark:text-white">
          Product Management
        </h1>
        <Link
          href="/product-management/add"
          className="bg-slate-200 rounded-lg px-3 py-1 dark:bg-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-900"
        >
          Add Product +
        </Link>
      </div>
      {loading ? <div>Loading...</div> : <ProductsTable products={products} />}
    </section>
  );
}

export default ProductManagementPage;
