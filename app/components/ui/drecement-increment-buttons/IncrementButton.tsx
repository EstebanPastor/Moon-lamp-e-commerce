"use client";

import { useCartStore } from "@/store/useCartStore";

import { RiAddFill } from "react-icons/ri";

import { ProductType } from "@/types/productType";

interface IncrementPropTypes {
  product: ProductType;
}

const IncrementButton = ({ product }: IncrementPropTypes) => {
  const cartStore = useCartStore();

  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <RiAddFill />
    </button>
  );
};

export default IncrementButton;
