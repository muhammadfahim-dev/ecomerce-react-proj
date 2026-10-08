import React from "react";
import mainImage from "../assets/main-img.png";
import bottomImage from "../assets/bottom-img.png";
import {
  HandPlatter,
  Heart,
  RotateCcw,
  Send,
  ShoppingBasket,
  Van,
  WalletCards,
} from "lucide-react";

function HomePage() {
  let categories = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/718adU1dqxL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      title: "Electronics",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/91B0tiykleL._AC_SX679_.jpg",
      title: "Feshion",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/716HuBmcRsL._AC_SX679_.jpg",
      title: "Home & Kitchen",
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/I/31lMWnQbTcL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Beauty",
    },
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/I/81aAqMnn46L._AC_SY300_SX300_QL70_FMwebp_.jpg",
      title: "Sports",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/81QVCRD3ObL._SY466_.jpg",
      title: "Books",
    },
  ];

  let bestSellers = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71sWRy5QxIL._AC_SX679_.jpg",
      title: "Wireless Earbuds",
      price: "$50.99",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/71NrPRCvFRL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      title: "Smart Watch",
      price: "$49.99",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71lwxV2igqL._AC_SX679_.jpg",
      title: "Bookbag",
      price: "$23.99",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71m5i4aWe0L._AC_SX695_.jpg",
      title: "Tennis Shoes",
      price: "$23.99",
    },
  ];

  return (
    <div className="px-3">
      <div className="w-full h-[90vh]">
        <img src={mainImage} alt="" className="w-full h-full" />
      </div>

      <div className="border border-gray-400 w-full my-5 rounded px-12 py-7 flex justify-center">
        <div className="border-r w-80 border-gray-400 px-7 flex gap-2 items-center">
          <Van className="" size={35} color="gray" />
          <div className="">
            <p className="font-bold ">Free Shipping</p>
            <p className="text-[12px] font-bold text-gray-500 mt-1">
              One Order Charge 550
            </p>
          </div>
        </div>

        <div className="border-r w-80 border-gray-400 px-7 flex gap-2 items-center">
          <RotateCcw size={30} color="gray" />
          <div className="">
            <p className="font-bold ">Easy Return</p>
            <p className="text-[12px] font-bold text-gray-500 mt-1">
              20 Days return Policy
            </p>
          </div>
        </div>

        <div className="border-r w-80 border-gray-400 px-7 flex gap-2 items-center">
          <WalletCards size={30} color="gray" />
          <div className="">
            <p className="font-bold ">Secure Payment</p>
            <p className="text-[12px] font-bold text-gray-500 mt-1">
              100% secure Payment
            </p>
          </div>
        </div>

        <div className="w-80 border-gray-400 px-7 flex gap-2 items-center">
          <HandPlatter size={30} color="gray" />
          <div className="">
            <p className="font-bold ">24/7 Support</p>
            <p className="text-[12px] font-bold text-gray-500 mt-1">
              Developer Suport
            </p>
          </div>
        </div>
      </div>

      <div className="px-3 my-10">
        <h1 className="text-xl font-bold my-5">Shop By Categories</h1>

        <div className="flex justify-center gap-20">
          {categories.map((category) => (
            <div
              className=" flex flex-col gap-2 p-3  shadow shadow-gray-500 rounded"
              key={category.id}
            >
              <img src={category.image} alt="" className="h-25 w-25" />

              <p className="text-sm font-bold ">{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-xl font-bold my-5">Best Sellers</h1>

        <div className="flex justify-around">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="shadow shadow-gray-500 w-50 rounded p-4 relative"
            >
              <Heart className="absolute top-3 right-2" size={20} />

              <img src={item.image} alt="" className="w-30 mx-auto h-30" />

              <p className="text-sm font-bold my-3">{item.title}</p>

              <div className="flex justify-between">
                <p className="font-bold">{item.price}</p>
                <p>starts</p>
              </div>

              <button className="bg-[#4355D3] mt-4 text-white rounded px-3 py-2 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[35vh] rounded overflow-hidden my-10">
        <img src={bottomImage} alt="" className="w-full h-full" />
      </div>

      <div className="my-10">
        <h1 className="text-xl font-bold my-5">New Arrivals</h1>

        <div className="flex justify-around">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="shadow shadow-gray-500 w-50 rounded p-4 relative"
            >
              <Heart className="absolute top-3 right-2" size={20} />

              <img src={item.image} alt="" className="w-30 mx-auto h-30" />

              <p className="text-sm font-bold my-3">{item.title}</p>

              <div className="flex justify-between">
                <p className="font-bold">{item.price}</p>
                <p>starts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-10 py-15 bg-[#4355D3] text-white border rounded-xl flex">
        <div className="w-60">
          <div className="flex gap-1 items-center">
            <ShoppingBasket size={30} />
            <p className="text-xl font-bold">ShopHub</p>
          </div>

          <div className="font-bold text-[12px] mt-30">
            Lorem ipsum, dolor sit amet consectetur
          </div>
        </div>

        <div className="grow flex justify-center gap-20">
          <div className="">
            <h1 className="mb-5 font-bold">Shop</h1>

            <ul className="flex flex-col gap-2">
              <li>Categories</li>
              <li>Deals</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
            </ul>
          </div>

          <div className="">
            <h1 className="mb-5 font-bold">Customer Service</h1>

            <ul className="flex flex-col gap-2">
              <li>Contact us</li>
              <li>Returns</li>
              <li>Shopping Info</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="">
            <h1 className="mb-5 font-bold">Company</h1>

            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className=" w-60 flex gap-7 flex-col">
          <h1 className="font-bold">Newsletter</h1>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>

          <div className="flex w-full gap-1 items-center">
            <input
              type="text"
              className="bg-white text-black px-3 py-2 outline-none rounded"
              placeholder="Email"
            />
            <div className="bg-blue-700 px-2 cursor-pointer py-2.5 rounded text-center">
              <Send className="" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
