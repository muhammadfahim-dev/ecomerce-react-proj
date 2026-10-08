import React from "react";
import dealsImage from "../assets/deal-img.png";
import {
  ShoppingBag,
  SmartphoneCharging,
  BadgeDollarSign,
  Spotlight,
  AlignStartHorizontal,
  Smartphone,
  Puzzle,
  Heart,
} from "lucide-react";

function DealsPage() {
  const dealsCollection = [
    {
      id: 1,
      title: "All Deals",
      icon: ShoppingBag,
    },
    {
      id: 2,
      title: "Lighting Deals",
      icon: SmartphoneCharging,
    },
    {
      id: 3,
      title: "Deals Under $25",
      icon: BadgeDollarSign,
    },
    {
      id: 4,
      title: "Best Deals",
      icon: Spotlight,
    },
    {
      id: 5,
      title: "Top Brands",
      icon: AlignStartHorizontal,
    },
    {
      id: 6,
      title: "Amazon Devices",
      icon: Smartphone,
    },
    {
      id: 7,
      title: "Coupons",
      icon: Puzzle,
    },
  ];

  const lightingDeals = [
    {
      id: 1,
      title: "Hybrid Active Noise Cancelling Headphones",
      img: "https://m.media-amazon.com/images/I/71Xwww4damL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      price: 54,
      discount: 30,
    },
    {
      id: 2,
      title: "Instant Pot Duo Plus",
      img: "https://m.media-amazon.com/images/I/71nx65qZq6L._AC_SY300_SX300_QL70_FMwebp_.jpg",
      price: 139,
      discount: 30,
    },
    {
      id: 3,
      title: "FUNLOGY Speaker",
      img: "https://m.media-amazon.com/images/I/41f6SnKT8ML._AC_SY879_.jpg",
      price: 21,
      discount: 20,
    },
    {
      id: 4,
      title: "YHO Wireless Portable Charger",
      img: "https://m.media-amazon.com/images/I/61gqiI--ixL._AC_SX679_.jpg",
      price: 40,
      discount: 20,
    },
    {
      id: 5,
      title: "Sceptre 27-inch Prime Gaming Monitor",
      img: "https://m.media-amazon.com/images/I/71jdr9u9YhL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      price: 239,
      discount: 40,
    },
  ];

  return (
    <div className="mx-3 p-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Today's Deals</h1>
        <p className="text-sm text-gray-500">New Deals Every Day</p>
      </div>

      <div className="flex justify-around my-5 py-2">
        {dealsCollection.map((item) => {
          let Icon = item.icon;

          return (
            <div className="flex flex-col gap-1 items-center" key={item.id}>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                <Icon />
              </div>
              <p className="text-[12px] font-semibold">{item.title}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full border h-[65vh] rounded-xl overflow-hidden">
        <img src={dealsImage} alt="" className="w-full h-full" />
      </div>

      <div className=" my-10">
        <h1 className="text-xl font-bold mb-5">Lightning Deals</h1>

        <div className="w-full flex justify-between">
          {lightingDeals.map((item) => (
            <div
              key={item.id}
              className="shadow shadow-gray-500 w-50 rounded p-4 relative"
            >
              <Heart className="absolute top-3 right-2" size={20} />

              <img src={item.img} alt="" className="w-30 mx-auto h-30" />

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
    </div>
  );
}

export default DealsPage;
