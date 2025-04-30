"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductsPage() {
  const [count, setCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (count > 5) {
      router.replace("/");
    }
  }, [count]);

  return (
    <div>
      <h1 className="text-xl">Count: {count}</h1>
      <button
        className="rounded border-white border-2 px-5 py-2"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>

      <div>
        <Link href={"/products/1"}>Product 1</Link>
        <Link href={"/products/2"}>Product 2</Link>
        <Link href={"/products/3"}>Product 3</Link>
        <Link href={"/products/4"}>Product 4</Link>
        <Link href={"/products/5"}>Product 5</Link>
      </div>
    </div>
  );
}

export default ProductsPage;
