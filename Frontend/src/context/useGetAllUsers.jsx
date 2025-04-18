import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        // const token = Cookies.get("jwt");
        // const response = await axios.get("https://letschat-2.onrender.com/api/user/allusers", {
        //   credentials: "include",
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        // ✅ Public request (no token)
        const response = await axios.get("https://letschat-2.onrender.com/api/user/allusers");

        setAllUsers(response.data);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return [allUsers, loading];
}

export default useGetAllUsers;
