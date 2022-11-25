import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductsModal = ({ product, setModal }) => {
  const { user } = useContext(AuthContext);
  console.log(product);
  const locations = [
    "Dhaka",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rajshahi",
    "Dinajpur",
  ];

  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const location = form.location.value;

    if (!user?.email) {
      return toast.error("please login for Buy");
    }

    const allInfo = {
      name: user?.displayName,
      email: user?.email,
      productName: product.model,
      price: product.resaleprice,
      number,
      location,
      image : product.img
    };
    console.log(allInfo);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("booking confirmed successfully");
          setModal(null);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleModal} className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-left">{product?.model}</h3>
          <div className="mt-7 ">
            <label className="">User Name</label>
            <input
              type="text"
              name="name"
              disabled
              defaultValue={user?.displayName}
              placeholder="Full Name"
              className="input border border-gray-400 w-full  py-4  "
            />
            <label className="my-2">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input border border-gray-400 w-full   py-4  "
              disabled
            />
            <label className="my-2">Product Name</label>
            <input
              type="text"
              name="item"
              placeholder="item name"
              defaultValue={product?.model}
              disabled
              className="input border border-gray-400 w-full  py-4  "
            />
            <label className="my-2">Product Price</label>
            <input
              type="number"
              defaultValue={product?.resaleprice}
              placeholder="price"
              disabled
              name="price"
              className="input border border-gray-400 w-full   py-4  "
            />
            <label className="my-2">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              className="input border border-gray-400 w-full my-3   py-4  "
            />
            <label className="my-2">Meet Location</label>
            <select
              name="location"
              className="select select-bordered w-full my-3 "
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" className="btn w-full mt-5" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ProductsModal;
