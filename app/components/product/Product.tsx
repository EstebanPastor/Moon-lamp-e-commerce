"use client";

import { useState } from "react";

import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

import Image from "next/image";

import image1 from "@/public/productimage1.jpeg";
import image2 from "@/public/productimage2.jpeg";
import image3 from "@/public/productimage3.jpeg";
import image4 from "@/public/productimage4.jpeg";

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = [image1, image2, image3, image4];

  const imageVariants = {
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20">
      <div className="w-[89%] m-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            {productImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={100}
                height={100}
                alt="product moonlamp image"
                className="rounded-md cursor-pointer"
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <div className="flex items-center">
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={imageVariants}
              key={currentImage}
            >
              <Image
                width={480}
                height={480}
                alt="main moonlamp image"
                className="rounded-md"
                src={productImages[currentImage]}
              />
            </motion.div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Wireless Moon Lamp</h2>
          <div className="flex gap-1 text-yellow-400 justify-center items-center mb-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>(5.0)</span>
          </div>
          <div className="mb-5">
            <span className="text-2xl mr-3 font-bold">$29.99</span>
            <span className="text-gray-400 line-through">49.99</span>
          </div>
          <p className="mb-5">
            Illuminate your space with the enchanting glow of our Moon Lamp.
            This captivating, 3D-printed lunar replica brings the serene beauty
            of the moon right into your home. With its soft, adjustable
            warm-white and cool-white lighting options
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
