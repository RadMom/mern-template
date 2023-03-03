import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password }
      );

      if (response.statusText === "OK") {
        //save the user to locale storage
        localStorage.setItem("user", JSON.stringify(response.data));
        //update auth context
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        setIsLoading(false);
      }
    } catch (err) {
      setError("this is the err: " + err.response.data.err);
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
