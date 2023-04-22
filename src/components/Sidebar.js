import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col w-56">
      <div className="bg-gray-600 px-4 py-3">
        <h3 className="text-lg font-medium">Filters</h3>
      </div>
      <div className="bg-white px-7 py-3">
        <h4 className="text-gray-500 uppercase tracking-wide  text-orange-500 font-medium">
          Cuisine
        </h4>
        <ul className="mt-2">
          <li className="mb-1 flex items-center">
            
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Asian
            </a>
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-500 rounded border-gray-300 mr-2"
            />
          </li>
        </ul>
      </div>
      <div className="bg-white px-7 py-3">
        <h4 className=" text-orange-500 uppercase tracking-wide font-medium">
          Meals
        </h4>
        <ul className="mt-2">
          <li className="mb-1 flex items-center">
            
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Health
            </a>
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-500 rounded border-gray-300 mr-2"
            />
          </li>
          <li className="mb-1 flex items-center">
            
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;
