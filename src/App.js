import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import de la barre de navigation
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="flex-grow bg-gray-100 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
