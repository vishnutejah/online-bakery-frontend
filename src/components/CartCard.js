import React, { useEffect, useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/CartReducer";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";

export const CartCard = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemElements, setCartItemElements] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    defineCartItems();
  }, [cartItems]);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const defineCartItems = () => {
    // Filter the array to get unique items based on the "id" property
    const uniqueIds = new Map();
    cartItems.forEach((item) => {
      uniqueIds.has(item.id)
        ? uniqueIds.set(item.id, uniqueIds.get(item.id) + 1)
        : uniqueIds.set(item.id, 1);
    });
    let cartValue = 0;
    const cartItemsDetails = [...uniqueIds].map(([id, count]) => {
      const item = cartItems.find((obj) => obj.id === id);
      const cartItemValue = count * item.itemPrice;
      cartValue += cartItemValue;

      return (
        <div
          className="w-4/5 m-2 border-2 rounded-md border-black shadow-sm flex"
          key={id}
        >
          <img
            src={item?.image}
            alt="cakeOne"
            className="object-center h-32 w-32 rounded-md p-2"
          />
          <div className="m-2 relative">
            <h1 className="font-bold font-serif text-left">
              {item?.displayName}
            </h1>
            <div className="flex flex-wrap mt-2 h-1/6 items-center pt-14">
              <p className="font-serif text-left font-semibold w-12">
                &#8377;{cartItemValue}
              </p>
              <div className="ml-4 border-2 bg-gray-800 text-white font-semibold tracking-widest flex items-center">
                <IconMinus
                  className="h-6 w-4 hover:cursor-pointer"
                  onClick={() => handleRemove({ item })}
                />
                <span className="ml-1 mr-1">{count}</span>
                <IconPlus
                  className="h-6 w-4 hover:cursor-pointer"
                  onClick={() => handleAdd({ item })}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    setCartItemElements(cartItemsDetails);

    setCartTotal(cartValue);
  };

  const handleOrder = () => {
    alert(`You are about to order ${cartItems.length} items`);
  };

  return (
    <>
      {cartItemElements?.length > 0 ? (
        <div className="flex justify-between rounded-md">
          <div className="w-5/6">{cartItemElements}</div>
          {cartItems.length > 0 && (
            <div className=" pt-4 border-2 rounded-md w-2/3 h-32 border-black shadow-md">
              <p className="font-bold font-serif text-center pr-2">
                Cart total : &#8377; {cartTotal}
              </p>
              <button
                onClick={handleOrder}
                className="bg-orange-500 text-white tracking-wider font-serif uppercase mt-10 border-2 rounded-lg p-2"
              >
                order
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-200 h-screen p-4 ml-64 mt-8">
          <h1 className="font-serif uppercase tracking-widest font-bold text-3xl">
            Cart empty !!
          </h1>
        </div>
      )}
    </>
  );
};
