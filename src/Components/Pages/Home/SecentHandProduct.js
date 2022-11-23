import React from "react";
import { useQuery } from "@tanstack/react-query";

const SecentHandProduct = () => {
  const { data: brand = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: () =>
      fetch("http://localhost:5000/brand").then((res) => res.json()),
  });
  console.log(brand);

  return (
    <div className="mx-auto container px-6 xl:px-0 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif">
          Our Most Valuable Brands
        </h1>
        <p className="text-xl mt-2">
          Here is a list of ten most valuable brands in the world based on the
          brand value data from Visual Capitalist.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
          <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
            <img
              className="group-hover:opacity-60 transition duration-500"
              src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
              alt="sofa-2"
            />
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">
                  Sectional Sofa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecentHandProduct;
