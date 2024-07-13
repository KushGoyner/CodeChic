import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            cols={30}
            rows={1}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl">2. Review Cart Items</h2>
      <div className="sideCart  bg-purple-300 p-5  m-2">
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
                  <div className="font-semibold">{cart[k].name}</div>

                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                    <FaCircleMinus
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
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
                          cart[k].varient
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
        <span className="font-bold">Suntotal: {subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={"/order"}>
          <button className="flex text-white bg-purple-500 border-0 py-2 px-2 focus:outline-none hover:bg-purple-600 rounded text-sm">
            <MdOutlinePayment className="m-1" />
            Pay ₹ {subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
