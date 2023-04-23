import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const [foodDetails, setFoodDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/fooddetails/${id}`)
      .then((response) => {
        console.log(response.data);
        setFoodDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 flex justify-between">
            <div></div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p className="text-gray-600">{foodDetails.ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
