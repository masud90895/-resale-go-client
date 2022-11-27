import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsModal from "../ProductDetailes/ProductsModal";
import axios from "axios";
import Swal from "sweetalert2";
import Product from "./Product"

const ProductDetailes = () => {
  const brands = useLoaderData();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(null);

  const handleReport = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Report This",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Report it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/report/${id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire(
              "Reported!",
              "Your Product has been Reported.",
              "success"
            );
          });
      }
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/brand/${brands?.brand}`).then((res) => {
      setProducts(res?.data);
    });
  }, [brands?.brand]);

  console.log(products);

  

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800 font-bold font-serif">
          {brands.brand} Collection
        </p>
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <p className=" font-normal text-sm leading-3 text-gray-600 ">
          Home / Category / {brands.brand}
        </p>
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className=" font-normal text-base leading-4 text-gray-800">
              Filter
            </p>
          </div>
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing {products.length} products
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {products?.map((product) => <Product key={product._id} product={product} handleReport={handleReport} setModal={setModal} setProduct={setProduct}/>)}
          {modal && <ProductsModal product={product} setModal={setModal} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
