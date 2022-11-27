import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../Shared/Loader";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct"],
    queryFn: () =>
      fetch(`https://assinment-12-server.vercel.app/myProduct?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment-12-server.vercel.app/dashboard/myProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "product delete successfully", "success");

            refetch();
          });
      }
    });
  };

  const handleAdvertise = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to advertise it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0000FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Advertise it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment-12-server.vercel.app/advertise/${id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire(
              "Advertise!",
              "Product advertise successfully",
              "success"
            );
          });
      }
    });

    /* fetch(`https://assinment-12-server.vercel.app/advertise`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(advertise),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("advertise successfully added")
          }); */
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="md:text-4xl text-2xl font-serif font-bold my-8 ml-3">
        <h1>My Products</h1>
      </div>
      {myProducts?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myProducts?.map((product, i) => (
                <tr key={product?._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{product.model}</td>
                  <td>{product.resaleprice}</td>
                  <td>{product.status === true ? "Sold" : "Available"}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-sm bg-black"
                    >
                      Delete
                    </button>
                  </td>
                  {!product.status && (
                    <td>
                      <button
                        onClick={() => handleAdvertise(product?._id)}
                        className="btn btn-sm bg-black"
                      >
                        advertise
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-4xl font-bold font-serif">
          <h1 className="text-red-500">You Don't added any product.</h1>
        </div>
      )}
    </>
  );
};

export default MyProducts;
