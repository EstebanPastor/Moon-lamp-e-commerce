"use client";

import { useCartStore } from "@/store/useCartStore";

import { BiMinus } from "react-icons/bi";

const DecrementButton = ({ product }) => {
  const cartStore = useCartStore();

  return (
    <button
      onClick={() =>
        cartStore.removeProduct({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <BiMinus />

    </button>
  );
};

export default DecrementButton;
