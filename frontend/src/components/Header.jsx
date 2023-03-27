import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export const Header = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="header">
      <h1 style={{ textAlign: "center" }}>PHONEBOOK</h1>
      <div className="App-header">
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
        <ul>
          <Link to={"/login"}>login</Link>
        </ul>
        <ul>
          <Link to={"/signup"}>Signup</Link>
        </ul>
      </div>
      <span className="logout">
        <button onClick={handleLogout}>Log out</button>
      </span>
    </div>
  );
};
