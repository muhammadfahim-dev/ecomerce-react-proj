import React, { useEffect, useState } from "react";
import {
  Smartphone,
  Laptop,
  Shirt,
  Watch,
  Sofa,
  Gamepad2,
  Dumbbell,
  BookOpen,
  Headphones,
  Camera,
  ShoppingCart,
  Baby,
  HeartPulse,
  Utensils,
  Car,
  Sparkles,
  Heart,
} from "lucide-react";
// main.jsx
import "../index.css";
import axios from "axios";
import RatingStars from "../components/RatingStars";
import Pagiantion from "../components/Pagiantion";

function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: Smartphone,
    },
    {
      id: 2,
      name: "Computers",
      icon: Laptop,
    },
    {
      id: 3,
      name: "Fashion",
      icon: Shirt,
    },
    {
      id: 4,
      name: "Watches",
      icon: Watch,
    },
    {
      id: 5,
      name: "Furniture",
      icon: Sofa,
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
    },
    {
      id: 7,
      name: "Fitness",
      icon: Dumbbell,
    },
    {
      id: 8,
      name: "Books",
      icon: BookOpen,
    },
    {
      id: 9,
      name: "Audio",
      icon: Headphones,
    },
    {
      id: 10,
      name: "Cameras",
      icon: Camera,
    },
    {
      id: 11,
      name: "Groceries",
      icon: ShoppingCart,
    },
    {
      id: 12,
      name: "Baby Care",
      icon: Baby,
    },
    {
      id: 13,
      name: "Health",
      icon: HeartPulse,
    },
    {
      id: 14,
      name: "Food",
      icon: Utensils,
    },
    {
      id: 15,
      name: "Automobile",
      icon: Car,
    },
    {
      id: 16,
      name: "Beauty",
      icon: Sparkles,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((reponse) => setProducts(reponse.data.products))
      .catch((err) => console.log("Someting went wrong", err));
  }, []);

  return (
    <div className="">
      <div className="flex justify-between w-full mt-5 py-5">
        <p className="text-xl font-bold ml-15">Category</p>

        <div className="border border-gray-400 flex items-center gap-2 mr-5 px-2 py-1 rounded">
          <h1 className="font-bold text-sm text-gray-500">Sort by</h1>

          <select
            name=""
            id=""
            className="outline-none border-none text-sm px-1"
          >
            <option value="">Popular</option>
            <option value="">Expensive</option>
            <option value="">Cheap</option>
            <option value="">New Arrivals</option>
          </select>
        </div>
      </div>

      <div className="flex gap-5 px-2">
        <div className="w-55 border border-gray-400 max-h-[85vh] overflow-y-auto no-scrollbar  flex flex-col gap-3 px-3 py-5 rounded sticky top-1">
          <h1 className="font-bold mb-4">Categoires</h1>

          {categories.map((cat) => {
            let Icon = cat.icon;

            return (
              <div
                className="flex gap-1 border border-gray-300 bg-gray-100 hover:bg-blue-100 w-40 items-center rounded p-1"
                key={cat.id}
              >
                <Icon size={20} />
                <p>{cat.name}</p>
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <div className=" grow grid grid-cols-4 place-items-center gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow shadow-gray-500 w-50 rounded p-4 relative "
              >
                <Heart className="absolute top-3 right-2" size={20} />

                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-30 mx-auto h-30"
                />

                <p className="text-sm font-bold my-3">{product.title}</p>

                <div className="flex justify-between">
                  <p className="font-bold">${product.price}</p>
                  <RatingStars rating={product.rating} />
                </div>

                <button className="bg-[#4355D3] mt-4 text-white rounded px-3 py-2 w-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="w-full p-5 my-5">
            <Pagiantion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
