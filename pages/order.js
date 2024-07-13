import React from 'react'

const Order = ({subTotal}) => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        
        <p class="leading-relaxed mb-4">Your order has been successfull placed.</p>
        <div class="flex justify-between mb-4">
          <a class=" text-purple-500 border-b-2  border-purple-500 py-2 text-lg px-1">Description</a>
          <a class=" border-b-2 border-purple-500  py-2 text-lg px-1">Quantity</a>
          <a class=" border-b-2 border-purple-500  py-2 text-lg px-1">SubTotal</a>
          
        </div>
        
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
          <span class="ml-auto text-gray-900">1</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
          <span class="ml-auto text-gray-900">1</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
          <span class="ml-auto text-gray-900">1</span>
        </div>
        <div class="flex ">
          <span class="title-font font-medium text-2xl text-gray-900">Total:- {subTotal}</span>
          <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Track Order</button>
          
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}

export default Order
