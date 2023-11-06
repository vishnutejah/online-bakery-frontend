import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import items from "../StaticData/Items";
import { MainCard } from "./MainCard";

export const Main = () => {
  const itemsCategory = ["Select", "Cake", "Cookie", "Muffin"];
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setCategoryFilter(selectedOption);
  };

  useEffect(() => {
    if (categoryFilter && categoryFilter != "Select") {
      const itemsCopy = [...items];
      const updatedFilteredItems = itemsCopy.filter(
        (item) => item.itemName == categoryFilter
      );
      setFilteredItems(updatedFilteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [categoryFilter]);

  const handleSearch = (event) => {
    const searchVal = event.target.value;
    const itemsCopy = [...items];
    if (searchVal == null) {
      setFilteredItems(items);
    } else {
      const updatedFilteredItems = itemsCopy.filter((item) =>
        item.displayName.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredItems(updatedFilteredItems);
    }
  };

  return (
    <div className="">
      <div className=" h-12 flex justify-between">
        <div className="relative pt-1 pl-2">
          <input
            className=" pl-8 py-2 pr-4 rounded-lg text-center border-gray-300 border-2"
            type="text"
            placeholder="Search items"
            onChange={(event) => {
              setTimeout(() => {
                handleSearch(event);
              }, 1000);
            }}
          />
          <span className="absolute top-2 left-2 pl-2 pt-1 pr-1">
            <IconSearch />
          </span>
        </div>
        <div className="pr-8">
          <select
            defaultValue=""
            className="w-32 h-8 rounded-md border border-gray-300 mt-2 pl-2"
            id="categories"
            onChange={handleCategoryChange}
          >
            {itemsCategory.map((cat, index) => {
              return (
                <option className="font-serif" key={index} value={cat}>
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
