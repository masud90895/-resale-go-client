import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const ReportedItems = () => {
  const {
    data: report = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["report"],
    queryFn: () =>
      fetch("https://assinment-12-server.vercel.app/report", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this products",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment-12-server.vercel.app/report/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            Swal.fire("Deleted!", "Your Product has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div>
      <div className="my-8">
        <h1 className="text-4xl font-serif font-bold text-center">
          Reported Product
        </h1>
      </div>
      {report?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/*  <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Model</th>
                <th>Seller</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {report?.map((rp, i) => (
                <tr key={rp._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{rp.model}</td>
                  <td>{rp.seller}</td>
                  <td>{rp.location}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(rp._id)}
                      className="btn btn-sm bg-black"
                    >
                      Remove product
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
            No Report Product Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default ReportedItems;
