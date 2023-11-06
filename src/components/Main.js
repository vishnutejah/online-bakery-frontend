import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import items from "../StaticData/Items";
import { MainCard } from "./MainCard";

export const Main = () => {
  const itemsCategory = ["Cake", "Cookie", "Muffin"];
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setCategoryFilter(selectedOption);
  };

  useEffect(() => {
    if (categoryFilter) {
      const itemsCopy = [...items];
      const updatedFilteredItems = itemsCopy.filter(
        (item) => item.itemName == categoryFilter
      );
      setFilteredItems(updatedFilteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [categoryFilter]);

  return (
    <div className="">
      <div className="bg-gray-500 h-12 flex justify-between">
        <div className="relative pt-1 pl-2">
          <input
            className="bg-green-400 pl-8 py-2 pr-4 rounded-lg text-center"
            type="text"
            placeholder="Search items"
          />
          <span className="absolute top-2 left-2 pl-2 pt-1 pr-1">
            <IconSearch />
          </span>
        </div>
        <div className="pr-8">
          <select
            defaultValue="Category"
            className="categories"
            id="categories"
            // disabled={
            //   dataAccess === 100 || dataAccess === 500
            //     ? false
            //     : !isStateEnable()
            // }
            onChange={handleCategoryChange}
          >
            {itemsCategory.map((cat, index) => {
              return (
                <option id={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap items-center bg-white justify-between">
        <MainCard filteredItems={filteredItems} />
      </div>
    </div>
  );
};
