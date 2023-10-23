"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../../cart/Cart";
import { useCartStore } from "@/store/useCartStore";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";

import logo from "@/public/moonlamplogo.png";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const cartStore = useCartStore();

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`py-4 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
      <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
        <Image src={logo} alt="moon-logo-img" width={200} height={200} />
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-dark ${
            openMobileMenu
              ? "top-12 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white font-medium drop-shadow-lg z-10"
              : "hidden"
          }`}
        >
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href={"#shop"} className="font-medium">
              Shop
            </Link>
          </li>
          <li>
            <Link  onClick={() => setOpenMobileMenu(false)}  href={"#features"} className="font-medium">
              Features
            </Link>
          </li>
          <li>
            <Link  onClick={() => setOpenMobileMenu(false)} href={"#faq"} className="font-medium">
              FAQ
            </Link>
          </li>
          <li>
            <Link  onClick={() => setOpenMobileMenu(false)} href={"#contact"} className="font-medium">
              Contact US
            </Link>
          </li>
        </ul>
        <div
          className="flex gap-4 items-center text-dark ml-auto
      md:ml-0
      "
        >
          <div
            className="cursor-pointer relative"
            onClick={() => cartStore.toggleCart()}
          >
            <BsCart4 size={25} className="cursor-pointer relative" />
            {cartStore.cart.length > 0 && (
              <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-3 bottom-3 flex items-center justify-center">
                {cartStore.cart.length}
              </span>
            )}
          </div>
          <div>
            <BsFillBagHeartFill size={25} className="cursor-pointer" />
          </div>
        </div>
        <div className="md:hidden ml-4" onClick={mobileMenuHandler}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
      {!cartStore.isOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
