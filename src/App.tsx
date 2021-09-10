import React from "react";

// ** Pages
import Home from "./pages/home";

// ** Components Layout
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <div className="container px-10 sm:px-28 img-Hero">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
