import { useEffect, useState } from "react";

export const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (email) {
      fetch(`https://assinment-12-server.vercel.app/allusers/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isLoading];
};