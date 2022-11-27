import { useEffect, useState } from "react";

export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (email) {
      fetch(`https://assinment-12-server.vercel.app/allusers/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isLoading];
};
