import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

const SecentHandProduct = () => {
  const [brands,setbrand] = useState([])
 /*  const {isLoading, data: brands = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: () =>
      fetch("http://localhost:5000/brand").then((res) => res.json()),
  });
  if (isLoading) {
    return <Loader />;
  } */

  useEffect(()=>{
    fetch("http://localhost:5000/brand")
    .then((res) => res.json())
    .then(data=>setbrand(data))
  },[])

  return (
    <div className="mx-auto container px-6 xl:px-0 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif">
          Our Most Valuable Brands
        </h1>
        <p className="text-xl mt-2">
          Here is a list of three most valuable brands in the world based on the
          brand value data from Visual Capitalist.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8 items-center">
          {brands?.map((brand) => (
            <div
              key={brand._id}
              className="relative group flex justify-center items-center h-full w-full"
            >
              <img
                className="object-center object-cover h-full w-full"
                src={brand.img}
                alt=""
              />

              <Link
                to={`../category/${brand._id}`}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white text-center"
              >
                <button>{brand.brand}</button>
              </Link>

              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecentHandProduct;
