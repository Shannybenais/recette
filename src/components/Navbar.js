import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            className="hover:text-yellow-400 transition duration-300"
          >
            Recette
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="hover:text-yellow-400 transition duration-300"
          >
            Parametre
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
