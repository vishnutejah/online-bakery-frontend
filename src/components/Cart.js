import React from "react";
import { CartCard } from "./CartCard";

const Cart = () => {
  return (
    <div className=" h-screen flex">
      <div className="h-full w-2/3 m-4">
        <CartCard />
      </div>
    </div>
  );
};

export default Cart;
