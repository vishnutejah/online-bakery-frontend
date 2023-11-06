import { IconHome2, IconShoppingCart } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { Dashboard } from "./Dashboard";
import { Main } from "./Main";

export const Header = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const cartItemsCount = cartItems.length;
  return (
    <div>
      <h1 className="pt-2 text-center text-black tracking-wider capitalize font-bold text-5xl font-serif">
        {/* Welcome to Chezuba bakery */}
      </h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="ml-2 text-left pt-10 text-lg font-semibold font-serif">
            <Link to="/" element={<Main />} className="flex">
              <IconHome2 />
              &nbsp;Main
            </Link>
          </p>
          <p className="ml-4 text-left pt-10 text-lg font-semibold font-serif">
            <Link to="/dashboard" element={<Dashboard />}>
              Dashboard
            </Link>
          </p>
        </div>
        <p className="pt-10 text-lg font-semibold font-serif flex pr-4">
          <Link to="/cart" element={<Cart />} className="flex">
            Cart&nbsp;
            <IconShoppingCart />
          </Link>
          <p className="w-6 h-6 text-sm bg-gray-800 text-white font-sans flex justify-center items-center rounded-full">
            {cartItemsCount}
          </p>
        </p>
      </div>
    </div>
  );
};
