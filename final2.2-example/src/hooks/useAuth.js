import { head, isEmpty } from "lodash";
import { useState } from "react";
import request from "../utils/request";

const sample = {
  createdAt: "2022-05-27T03:09:30.998Z",
  name: "Mrs. Carolyn Predovic",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg",
  age: 75,
};

export default function useAuth() {
  const [user, setUser] = useState(null);

  const saveUserToSession = (value) => {
    const userString = JSON.stringify(value);
    sessionStorage.setItem("USER", userString);
  };

  const checkUserIsAvailable = (value) => {
    const userString = sessionStorage.getItem("USER");
    const userJson = JSON.parse(userString);
    return userJson;
  };

  const clearUserSession = (value) => {
    sessionStorage.removeItem("USER");
  };

  const signIn = ({ username, password }) => {
    return request
      .get("/users", {
        params: {
          username,
          password,
        },
      })
      .then((res) => {
        const { data } = res;
        const userLoggedIn = head(data);
        if (!isEmpty(res)) {
          setUser(userLoggedIn);
          saveUserToSession(userLoggedIn);
        }
        return userLoggedIn;
      });
  };

  const signUp = ({ username, password }) => {
    const data = { ...sample, username, password };
    return request.post("/users", data).then((res) => {
      const { data } = res;
      return data;
    });
  };

  const signOut = async () => {
    clearUserSession();
    setUser(null);
  };

  return {
    user,
    signIn,
    signOut,
    signUp,
    setUser,
    checkUserIsAvailable,
  };
}
