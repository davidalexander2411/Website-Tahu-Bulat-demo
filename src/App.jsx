import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home"
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Location from "./components/Location"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[rgb(254,215,0)]">
    	  <Home />
        <Menu />
        <Reviews />
        <Location />
      </div>
      <Footer />
    </>
  );
}

export default App;