import React, { useEffect, useState } from "react";
import Advertised from "./Advertised";
import Banner from "./Banner";
import Review from "./Review";
import SecentHandProduct from "./SecentHandProduct";

const Home = () => {
  const [advertise, setAdvertise] = useState([]);

  // console.log('object');
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => setAdvertise(data));
  }, []);

  return (
    <div>
      <Banner />
      {advertise?.length > 0 && <Advertised  advertise={advertise}/>}

      <SecentHandProduct />
      <Review />
    </div>
  );
};

export default Home;
