import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <div className="bg-orange-500 h-32 w-full border-b-4">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
