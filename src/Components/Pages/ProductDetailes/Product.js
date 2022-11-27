import React, { useEffect,useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiPriceTag, GiCalendarHalfYear } from "react-icons/gi";
import { MdOutlinePriceChange, MdReportProblem } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { SiSellfy } from "react-icons/si";

const Product = ({ product, handleReport, setProduct, setModal }) => {

  const [sellerRole,setSellerRole] = useState('')
 
 
  useEffect(() => { 
      fetch(`http://localhost:5000/user?email=${product?.email}`)
        .then((res) => res.json())
        .then((data) => setSellerRole(data?.verify))
        .catch(err=>console.log(err))
  }, [product?.email]);


  return (
    <div
      key={product._id}
      className={`card card-compact w-full lg:w-96 bg-base-100 shadow-xl border border-black ${product.paid=== true && "hidden"}`}
    >
      <figure>
        <img
          className="lg:h-[200px] px-4 md:h-[280px] h-[180px] w-full p-2 rounded-lg"
          src={product.img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{product.model}</h2>
          <h1
            onClick={() => handleReport(product._id)}
            title="Report product"
            className="text-red-500 flex cursor-pointer"
          >
            <MdReportProblem className="mt-1 " /> Report
          </h1>
        </div>
        <div className="text-lg">
          <p className="flex">
            <GiPriceTag className="mt-2 mr-1" />
            <span>Selling price : {product.resaleprice} /tk</span>
          </p>
          <p className="flex">
            <MdOutlinePriceChange className="mt-2 mr-1" />
            Original price : {product.originalprice} /tk
          </p>
          <p className="flex">
            <HiLocationMarker className="mt-2 mr-1" />
            Location : {product.location}
          </p>
          <p className="flex">
            <GiCalendarHalfYear className="mt-2 mr-1" />
            Used year : {product.usesyear} / year
          </p>
          <p className="flex">
            <AiOutlineFieldTime className="mt-2 mr-1" />
            Posted Time : {product.time}
          </p>
          <h1 className="flex">
            <span className="flex">
              <SiSellfy className="mt-2 mr-1" />
              Seller : {product.seller}
            </span>
            <p className=" ml-5">
              {sellerRole && (
                <span className="flex text-green-500">
                  <FaCheckCircle
                    title="verified"
                    className="text-green-500 mt-2 mr-2 "
                  />{" "}
                  <span className="font-sans">verified</span>
                </span>
              )}
            </p>
          </h1>
        </div>
        <div className="card-actions justify-start">
          <label
            onClick={() => setProduct(product) || setModal(product)}
            htmlFor="my-modal-3"
            className="btn bg-black text-white hover:bg-white hover:text-black"
          >
            Book now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
