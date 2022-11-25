import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const imgHostKey = process.env.REACT_APP_imgKey;
  const navigate = useNavigate();
  const time = new Date().toLocaleTimeString();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const handleSubmitData = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const productInfo = {
            img: result.data.url,
            brand: data.brand,
            model: data.model,
            location: data.location,
            time,
            verify: false,
            originalprice: 2999,
            resaleprice: data.price,
            usesyear: data.usesyear,
            seller: data.name,
            email: data.email,
            status : false
          };
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`products is added successfully`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };
  return (
    <div>
      <div className="text-left text-3xl font-bold my-6 md:pl-8">
        <h1 className="font-serif">Add a Product </h1>
      </div>
      <form
        className="md:w-[50%] w-[96%] mx-auto md:mx-8 mt-5 shadow-2xl p-6 rounded-xl"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <label className="label">
          <span className="text-md text-black">Name</span>
        </label>
        <input
          type="text"
          defaultValue={user.displayName}
          readOnly
          className="input input-bordered w-full "
          {...register("name", {
            required: "name is required",
          })}
        />
        {errors.name && (
          <p className="text-red-600 text-start">{errors.name?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Phone Model Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("model", {
            required: "model is required",
          })}
        />
        {errors.model && (
          <p className="text-red-600 text-start">{errors.model?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Email</span>
        </label>
        <input
          type="email"
          defaultValue={user.email}
          readOnly
          className="input input-bordered w-full "
          {...register("email", {
            required: "email is required",
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-start">{errors.email?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Price</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full "
          {...register("price", {
            required: "price is required",
          })}
        />
        {errors.price && (
          <p className="text-red-600 text-start">{errors.price?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Mobail Number</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full "
          {...register("phonenumber", {
            required: "phone number is required",
          })}
        />
        {errors.phonenumber && (
          <p className="text-red-600 text-start">
            {errors.phonenumber?.message}
          </p>
        )}
        <label className="label">
          <span className="text-md text-black">Condition</span>
        </label>
        <select
          {...register("condition", {
            required: "Condition is required",
          })}
          className="select select-bordered w-full"
        >
          <option value="excellent" key="excellent">
            excellent
          </option>
          <option value="good" key="good">
            good
          </option>
          <option value="fair" key="fair">
            fair
          </option>
        </select>
        {errors.condition && (
          <p className="text-red-600 text-start">{errors.condition?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Brand</span>
        </label>
        <select
          {...register("brand", {
            required: "brand is required",
          })}
          className="select select-bordered w-full"
        >
          <option value="Xiaomi" key="Xiaomi">
            Xiaomi
          </option>
          <option value="Apple" key="Apple">
            Apple
          </option>
          <option value="Realme" key="Realme">
            Realme
          </option>
        </select>
        {errors.brand && (
          <p className="text-red-600 text-start">{errors.brand?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Location</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("location", {
            required: "location is required",
          })}
        />
        {errors.location && (
          <p className="text-red-600 text-start">{errors.location?.message}</p>
        )}
        <label className="label">
          <span className="text-md text-black">Description</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-600 text-start">
            {errors.description?.message}
          </p>
        )}
        <label className="label">
          <span className="text-md text-black">Uses Year</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("usesyear", {
            required: "usesyear is required",
          })}
        />
        {errors.usesyear && (
          <p className="text-red-600 text-start">{errors.usesyear?.message}</p>
        )}

        <label className="label">
          <span className="text-md text-black">Upload image</span>
        </label>
        <input
          type="file"
          className="input  w-full "
          {...register("image", { required: "image is required" })}
        />
        {errors.image && (
          <p className="text-red-600 text-start">{errors.image?.message}</p>
        )}

        {error && <p className="text-red-600 text-start">{error}</p>}
        <input className="btn w-full mt-3" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddAProduct;
