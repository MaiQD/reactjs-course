import React, { useState } from "react";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const fakeUser = {
  username: "datmq1@yopmail.com",
  password: "123456",
  name: "Steven",
  age: 25,
};
const fakeUser2 = {
  username: "test@yopmail.com",
  password: "123456",
  name: "Gia",
  age: 25,
}
export default function useAuth() {
  const [user, setUser] = useState(null);

  const saveUserToSession = (value) => {
    const userString = JSON.stringify(value);
    sessionStorage.setItem("USER", userString);
  };

  const checkUserIsAvailable = (value) => {
    debugger
    const userString = sessionStorage.getItem("USER");
    const userJson = JSON.parse(userString);
    return userJson;
  };

  const clearUserSession = (value) => {
    sessionStorage.removeItem("USER");
  };

  const signIn = ({ username, password }) => {
    if (fakeUser.username === username && fakeUser.password === password) {
      setUser(fakeUser);
      saveUserToSession(fakeUser);
      return Promise.resolve(fakeUser);
    }
    else if (fakeUser2.username === username && fakeUser2.password === password) {
      setUser(fakeUser2);
      saveUserToSession(fakeUser2);
      return Promise.resolve(fakeUser2);
    }
    return Promise.resolve(null);
  };

  const signOut = async () => {
    clearUserSession();
    setUser(null);
  };

  return {
    user,
    signIn,
    signOut,
    setUser,
    checkUserIsAvailable,
  };
}
