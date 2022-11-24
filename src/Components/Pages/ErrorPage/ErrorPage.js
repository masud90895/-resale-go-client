import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="">
      <div className="flex items-center justify-center py-12">
        <div className=" rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="px-4 hidden md:block w-[600px] h-[350px]"
              src="https://i.ibb.co/r0d8vpv/Na-Nov-26.jpg"
              alt=""
            />
            <img
              className="md:hidden w-[271px] h-[148px]"
              src="https://i.ibb.co/r0d8vpv/Na-Nov-26.jpg"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-red-500">
              {error.status}{" "}
            </h1>
            <p className="px-4 mb-4 text-base leading-none text-center text-red-500">
              {error.statusText}
            </p>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <Link to="/">
              <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-red-800">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
