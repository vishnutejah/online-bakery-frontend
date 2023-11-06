import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/CartReducer";

export const MainCard = ({ filteredItems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = ({ item }) => {
    dispatch(addToCart(item));
  };

  return filteredItems?.map((item, index) => {
    return (
      <div
        key={index}
        className=" w-2/5 h-2/5 m-2 border-spacing-1 rounded-md shadow-sm flex"
      >
        <img
          src={item.image}
          alt="cakeOne"
          className="object-center h-64 w-64 rounded-md p-2"
        />
        <div className=" w-64 m-2">
          <h1 className="font-bold font-serif text-left pl-2">
            {item.displayName}
          </h1>
          <p className="text-justify p-2 tracking-normal font-serif">
            {item.description}
          </p>

          <div className="flex   mt-4 h-1/6">
            <p className="font-serif text-left font-semibold py-4 pl-2">
              &#8377;{item.itemPrice}
            </p>
            <button
              onClick={() => handleAddToCart({ item })}
              className="mt-3 h-2/3 ml-32 border-2 rounded-lg bg-gray-800 text-white font-semibold px-5 tracking-widest"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  });
};
