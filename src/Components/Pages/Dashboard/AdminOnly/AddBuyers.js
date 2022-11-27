import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AddBuyers = () => {
    const {
        data: allBuyer = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["allUser"],
        queryFn: () =>
          fetch("https://assinment-12-server.vercel.app/allUser", {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((res) => res.json()),
      });
    
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete this Buyer",
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
                Swal.fire("Deleted!", "Your User has been deleted.", "success");
              });
          }
        });
      };
    
      return (
        <div>
          <div className="my-8">
            <h1 className="text-4xl font-serif font-bold text-center">
              All Buyer
            </h1>
          </div>
          {allBuyer?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                {/*  <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allBuyer?.map((buyer, i) => (
                    <tr key={buyer._id} className="hover">
                      <th>{i + 1}</th>
                      <td>{buyer.name}</td>
                      <td>{buyer.email}</td>
                      <td>{buyer.role}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(buyer._id)}
                          className="btn btn-sm bg-black"
                        >
                          Remove Buyer
                        </button>
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
                No Buyer Found
              </h1>
            </div>
          )}
        </div>
      );
};

export default AddBuyers;