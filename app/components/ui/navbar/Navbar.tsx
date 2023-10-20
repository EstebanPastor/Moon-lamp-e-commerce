"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";

import logo from "@/public/moonlamplogo.png";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="py-3">
      <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
        <Image src={logo} alt="moon-logo-img" width={200} height={200} />
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-dark ${
            openMobileMenu
              ? "top-12 py-10 w-full bg-background left-0 text-center space-y-10 text-white font-medium drop-shadow-lg z-10"
              : "hidden"
          }`}
        >
          <li>
            <Link href={"/"} className="font-medium">
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/"} className="font-medium">
              More info
            </Link>
          </li>
          <li>
            <Link href={"/"} className="font-medium">
              FAQ
            </Link>
          </li>
          <li>
            <Link href={"/"} className="font-medium">
              Contact US
            </Link>
          </li>
        </ul>
        <div
          className="flex gap-4 items-center text-dark ml-auto
      md:ml-0
      "
        >
          <div>
            <BsCart4 size={25} />
          </div>
          <div>
            <BsFillBagHeartFill size={25} />
          </div>
        </div>
        <div className="md:hidden ml-4" onClick={mobileMenuHandler}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
