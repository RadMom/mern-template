import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <h1>PHONEBOOK</h1>
      <div className="nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
        <div className="logout-btn">
          {user && <h2>{user.email}</h2>}
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </header>
  );
};
