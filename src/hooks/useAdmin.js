import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  if (email) {
    useEffect(() => {
      fetch(
        `https://doctors-portal-server-navy.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }, [email]);
  }
  return [isAdmin, adminLoading];
};

export default useAdmin;
