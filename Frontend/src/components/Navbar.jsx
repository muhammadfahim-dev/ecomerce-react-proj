import React from "react";
import { Heart, ShoppingBasket, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-5">
      <Link to={"/"} className="flex items-center">
        <ShoppingBasket className="text-blue-500 font-bold mr-3" />
        <span className="text-xl font-bold">Shop</span>
        <span className="text-blue-500 font-bold text-xl">Hub</span>
      </Link>

      <div className="flex gap-10 text-sm font-semibold text-gray-500">
        <Link to={"/categories"}>Categories</Link>

        <Link to={"/deals"}>Deals</Link>

        <Link>New Arrivals</Link>

        <Link>Best Sellers</Link>
      </div>

      <div className="flex gap-7">
        <Heart className="cursor-pointer " />

        <ShoppingCart className="cursor-pointer" />

        <User className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
