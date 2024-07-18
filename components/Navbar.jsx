import Link from "next/link";
import {React,useState} from "react";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";
import { CiLogout } from "react-icons/ci";

const Navbar = ({
  user,
  logout,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const ref = useRef();
  const [dropdown, setDropdown] = useState(false)

  
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
      
      <div className="logo md:mx-5 mr-auto">
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
      <div className="cursor-pointer items-center cart absolute right-0 top-4 mx-5 flex ">
        <a  onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
        {dropdown&&<div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute top-6 border right-4 py-4 bg-white shadow-lg rounded-md px-5 w-32">
          <ul className="flex flex-col">
            <Link href={'/dashboard'}><li className="py-1 hover:text-purple-800 text-sm font-bold">My Account</li></Link>
            <Link href={'/orders'}><li className="py-1 hover:text-purple-800 text-sm font-bold">Orders</li></Link>
            <li onClick={logout} className="py-1 hover:text-purple-800 text-sm flex font-bold item-center space-x-1"><CiLogout className="mt-1"/> Logout</li>
          </ul>
        </div>}
        {user.value && <MdAccountCircle  className="text-xl md:text-2xl mx-2" />}
        </a>
        {!user.value && (
          <Link href={"/login"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 group-hover:from-sky-500 group-hover:via-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </Link>
        )}
        <IoIosCart onClick={toggleCart} className="text-xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className={`w-72 overflow-y-hidden h-[100vh] sideCart absolute top-0 right-0 bg-purple-300 px-8 py-10 transform z-20 transition-transform ${
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
                  <div className="w-2/3 font-semibold">
                    {cart[k].name} ({cart[k].size} /{cart[k].variant})
                  </div>

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
