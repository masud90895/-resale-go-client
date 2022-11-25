import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myProducts = [], isLoading } = useQuery({
    queryKey: ["myProduct"],
    queryFn: () =>
      fetch(`http://localhost:5000/myProduct?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  console.log(myProducts);
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
                    <button className="btn btn-sm bg-black">Delete</button>
                  </td>
                  {!product.status && (
                    <td>
                      <button className="btn btn-sm bg-black">advertise</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-4xl font-bold font-serif">
          <h1>You Don't added any product.</h1>
        </div>
      )}
    </>
  );
};

export default MyProducts;
