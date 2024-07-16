import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10">
      <div className="logo mx-5">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image src="/logo4.png" alt="CodeChic" width={200} height={20} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href={"/tshits"}>
            <li className="hover:text-purple-800">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-purple-800">hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-purple-800">Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-purple-800">Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="cursor-pointer cart absolute right-0 top-4 mx-5 flex ">
        <Link href={'/login'}><MdAccountCircle className="text-xl md:text-2xl mx-2" /></Link>
        <IoIosCart onClick={toggleCart} className="text-xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-purple-300 px-8 py-10 transform z-20 transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-xl text-center">shopping cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-purple-700 text-2xl"
        >
          <IoMdCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 text-base font-semibold">
              Your cart is empty.
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name} ({cart[k].size} /{cart[k].variant})</div>

                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                    <FaCircleMinus
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer"
                      color="874CCC"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <FaCirclePlus
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer"
                      color="874CCC"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mx-2 text-white bg-purple-500 border-0 py-2 px-2 focus:outline-none hover:bg-purple-600 rounded text-sm">
              <IoBagHandle className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-2  text-white  bg-purple-500 border-0 py-2 px-2 focus:outline-none hover:bg-purple-600 rounded text-sm"
          >
            <MdDeleteSweep className="m-1" />
            ClearCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
