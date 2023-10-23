"use client";

import { useCartStore } from "@/store/useCartStore";

import { BiMinus } from "react-icons/bi";

import { ProductType } from "@/types/productType";

interface DecrementPropTypes {
  product: ProductType;
}

const DecrementButton = ({ product }: DecrementPropTypes) => {
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
