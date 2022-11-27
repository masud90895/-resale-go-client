import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {
    data: allSeller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: () =>
      fetch("https://assinment-12-server.vercel.app/allSeller", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Seller",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete him!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment-12-server.vercel.app/allSeller/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            Swal.fire("Deleted!", "Your Seller has been deleted.", "success");
          });
      }
    });
  };

  const handleVerify = (id) => {
    console.log(id);
    fetch(`https://assinment-12-server.vercel.app/sellerVerify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Seller has been verify successfully");
      });
  };

  return (
    <div>
      <div className="my-8">
        <h1 className="text-4xl font-serif font-bold text-center">
          All Seller
        </h1>
      </div>
      {allSeller?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/*  <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              {allSeller?.map((seller, i) => (
                <tr key={seller._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(seller._id)}
                      className="btn btn-sm bg-black"
                    >
                      Remove Seller
                    </button>
                  </td>
                  <td>
                    {seller.verify ? (
                      <h1 className="text-green-600">Verified</h1>
                    ) : (
                      <button
                        onClick={() => handleVerify(seller._id)}
                        className="btn btn-sm bg-black"
                      >
                        Verify
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold font-serif text-red-500">
            {" "}
            No Seller Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default AllSeller;
