import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";


const navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-1 shadow-xl">
      <div className="logo mx-5">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image src="/logo4.png" width={200} height={20} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href={'/tshits'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>hoodies</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        
      <IoIosCart className="text-xl md:text-2xl"/>
      </div>
    </div>
  );
};

export default navbar;
