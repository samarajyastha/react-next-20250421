"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function AddToCart({ product, className }) {
  const dispatch = useDispatch();

  function addProductToCart() {
    delete product.description;

    dispatch(addToCart(product));

    toast.success("Product added to cart successfully.", { autoClose: 750 });
  }

  return (
    <button
      onClick={addProductToCart}
      className={`rounded px-4 py-2 flex items-center justify-center bg-primary hover:opacity-90 text-white ${className}`}
    >
      <MdOutlineAddShoppingCart className="w-4 h-4 me-2" />
      <span> Add to cart</span>
    </button>
  );
}

export default AddToCart;
