import { Card } from "flowbite-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex flex-col ">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://source.unsplash.com/featured/?food"
            alt="food"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Nama Makanan
            </a>
            <p className="mt-2 text-gray-500">Pencipta Makanan</p>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              ★
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex flex-col ">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://source.unsplash.com/featured/?food"
            alt="food"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Nama Makanan
            </a>
            <p className="mt-2 text-gray-500">Pencipta Makanan</p>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">
              ★
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              ★
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
