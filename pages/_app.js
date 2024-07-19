import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
 
  const [cart, setCart] = useState({});
  const router = useRouter();
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const [subTotal, setSubTotal] = useState({ value: null });

  const logout = () => {
    localStorage.clear();
    setUser({ value: null });
    setKey(Math.random());
    router.push('/')
  };
  
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{setProgress(40)})
    
    router.events.on('routeChangeComplete',()=>{setProgress(100)})
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error("Error");
      localStorage.clear();
    }
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
    toast("😀 Item Added to Cart!");
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    saveCart({});
    let newCart = { itemCode: { qty: 1, price, name, size, variant } };

    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  return (
    <>
      <LoadingBar
        color="#7e22ce"
        
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar
        logout={logout}
        user={user}
        key={key}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        buyNow={buyNow}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        buyNow={buyNow}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        buyNow={buyNow}
        subTotal={subTotal}
      />
    </>
  );
}
