import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Food() {
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/foods")
      .then((response) => {
        console.log(response.data)
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-64 h-48 object-cover"
              src={food.photo}
              alt="Food"
            />
            <div className="p-4 flex justify-between">
              <div>
                <Link to={`/food-details/${food.id}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {food.name}
                </h3>
                </Link>
                <p className="text-gray-600">{food.chefName}</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <p className="text-gray-600">{food.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
