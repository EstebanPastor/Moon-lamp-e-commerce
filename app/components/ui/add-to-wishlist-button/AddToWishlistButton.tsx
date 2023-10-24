import { AiOutlineHeart } from "react-icons/ai";

import { useWishlistStore } from "@/store/useWishListStore";

import { ProductType } from "@/types/productType";

const AddToWishlistButton = ({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: ProductType) => {
  const wishListStore = useWishlistStore();
  return (
    <div
      className="flex items-center gap-2 justify-center cursor-pointer"
      onClick={() =>
        wishListStore.addToWishlist({ name, id, image, unit_amount, quantity })
      }
    >
      <AiOutlineHeart />
      <span>Add to wishlist</span>
    </div>
  );
};

export default AddToWishlistButton;
