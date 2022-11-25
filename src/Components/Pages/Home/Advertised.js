import React from "react";

const Advertised = ({ advertise }) => {
  console.log(advertise);
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold  font-serif ">Advertise Phone</h1>
        <p className="mt-2 text-xl">
          We bring some most recommended phones for you
        </p>
      </div>
      <div className="py-12 px-4 grid lg:grid-cols-2">
        {advertise?.map((advartice) => (
          <div
            key={advartice._id}
            className={`lg:max-w-[744px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7 ${advartice?.status === true && "hidden"}`}
          >
            <div className="lg:max-w-[696px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
              <div className="lg:flex md:flex block justify-between items-center">
                <div className="md:p-10 p-4">
                  <p className="text-base leading-none text-gray-800">
                    Save upto 30%
                  </p>
                  <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                    {advartice?.model}
                  </p>
                  <p className="text-base leading-normal text-gray-600">
                    Price : ${advartice?.resaleprice}
                  </p>
                  <p className="text-base leading-normal text-gray-600">
                    Buy to visit {advartice?.brand} collection
                  </p>
                </div>
                <div className="md:p-10 p-4">
                  <img
                    src={advartice?.img}
                    className="w-[273px] h-[247px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Advertised;
