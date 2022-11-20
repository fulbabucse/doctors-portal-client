import { useEffect } from "react";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://doctors-portal-server-navy.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem(
              "doctors-portal-access-token",
              data.accessToken
            );
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
