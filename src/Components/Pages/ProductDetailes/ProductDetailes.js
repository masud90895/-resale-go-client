import React,{ useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import ProductsModal from "../ProductDetailes/ProductsModal";
import axios from "axios"

const ProductDetailes = () => {
  const brands = useLoaderData();
  const [product, setProduct] = useState({});  
  const [products, setProducts] = useState([]);  
  const [modal,setModal] = useState(null)
  /* const { data: products = [], isLoading } = useQuery({
    queryKey: ["brand",],
    queryFn: () =>
      fetch(`http://localhost:5000/brand/${brands.brand}`).then((res) =>
        res.json()
      ),
  }); */

 /*  if (isLoading) {
    return <Loader />;
  } */

 /*  useEffect(()=>{
    fetch(`http://localhost:5000/brand/${brands.brand}`)
    .then((res) =>res.json())
    .then(data=> setProducts(data))
  },[brands.brand]) */


  useEffect(()=>{
    axios.get(`http://localhost:5000/brand/${brands?.brand}`)
    .then(res=>{
      setProducts(res?.data)
    })
  },[brands?.brand])
  
  



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
          {products?.map((product) => (
            <div
              key={product._id}
              className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl border border-black"
            >
              <figure>
                <img
                  className="lg:h-[200px] md:h-[280px] h-[180px] w-full p-2 rounded-lg"
                  src={product.img}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl font-bold">{product.model}</h2>
                <div className="text-lg">
                  <p>Selling price : {product.resaleprice} /tk</p>
                  <p>Original price : {product.originalprice} /tk</p>
                  <p>Location : {product.location}</p>
                  <p>Used year : {product.usesyear} / year</p>
                  <p>Posted Time : {product.time}</p>
                  <h1 className="flex">
                    <span>Seller : {product.seller}</span>
                    <p className=" ml-5">
                      {product.verify && (
                        <span className="flex text-green-500">
                          <MdVerifiedUser
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
                  onClick={()=>(setProduct(product)) || (setModal(product))}
                    htmlFor="my-modal-3"
                    className="btn bg-black text-white hover:bg-white hover:text-black"
                  >
                    Book now
                  </label>
                </div>
              </div>
            </div>
          ))}
          {
            modal &&  <ProductsModal product={product} setModal={setModal} />
          }
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
