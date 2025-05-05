"use client";
import Link from "next/link";

function ProductDetailsLayout({ children }) {
  return (
    <div>
      {children}
      <div className="my-5 bg-slate-900 h-52">
        <h2 className="text-2xl">Related Products</h2>
        <Link href={"/products/33"}>Product 33</Link>
      </div>
    </div>
  );
}

export default ProductDetailsLayout;
