import { useEffect, useState } from "react";

export const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (email) {
      fetch(`http://localhost:5000/allusers/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isBuyer);
          setLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isLoading];
};