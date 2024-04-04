import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        setUser(null); // Update user state after logout
        window.location.reload(); // Reload the page after logout
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Conditionally render login/logout button and user email */}
        {user ? (
          <>
            <li>{user}</li>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
