import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Mugs = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {Object.keys(products).length===0&&<p>Sorry! New Mugs are out of stock. New stock coming soon.</p>}
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-1 shadow-purple-300 "
                >
                  <Link
                    passHref={true}
                    className="block relative  rounded overflow-hidden"
                    href={`/product/${products[item].slug}`}
                  >
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh] md:h-[46vh] block"
                      src={`${products[item].img}`}
                    />

                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Mugs
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-1">
                      {products[item].size.map((size) => {
                          return (
                            <span className="border rounded-md border-purple-600 px-1 mx-1">
                            {size}
                          </span>
                          );
                        })
                      } 
                       
                        
                      </div>
                      <div className="mt-1 flex">
                        <span className="mr-3">Color :</span>
                        {products[item].color.map((color) => {
                          return (
                            <button
                              className={`border-2 border-gray-300 bg-${color}-500 rounded-full w-6 h-6 focus:outline-none`}
                            ></button>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: "mugs" });
  let mugs = {};

  for (let item of products) {
    if (item.title in mugs) {
      if (item.title in mugs) {
        if (
          !mugs[item.title].color.includes(item.color) &&
          item.availableQty > 0
        ) {
          mugs[item.title].color.push(item.color);
        }
        if (
          !mugs[item.title].size.includes(item.size) &&
          item.availableQty > 0
        ) {
          mugs[item.title].size.push(item.size);
        }
      }
    } else {
      mugs[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color];
        mugs[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) },
  };
}

export default Mugs;
