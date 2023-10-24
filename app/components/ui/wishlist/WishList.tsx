import { useWishlistStore } from "@/store/useWishListStore";
import Image from "next/image";

const WishList = () => {
  const wishlistStore = useWishlistStore();
  return (
    <div
      onClick={() => wishlistStore.toggleWishList()}
      className="fixed w-full h-screen top-0 left-0 bg-black/25 z-
      50"
    >
      <div>

      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-full p-12"
      >
        <button onClick={() => wishlistStore.toggleWishList()}>Back to store</button>
        {wishlistStore.onWishList === "wishlist" && wishlistStore.wishList.length > 0 ? (
          <>
          <span>You have {wishlistStore.wishList.length} items in your wishlist</span>
          {wishlistStore.wishList.map((product) => (
            <div key={product.id}>
                <Image src={product.image} alt="wishlist-product"
                width={100} height={100}
                />
                <h1>{product.name}</h1>
                <button onClick={() => wishlistStore.removeFromWishlist({...product})}>Remove</button>
            </div>
          ))}
          </>
        ): (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="font-bold text-xl">
                  Your wishlist is empty
                </h1>
            </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default WishList;
