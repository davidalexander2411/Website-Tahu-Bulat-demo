import { useState, useEffect } from "react";
import "../App.css";
function Home() {

    return (
        <>
        <div id="home" className="flex justify-between items-center relative">
          <div className="absolute left-8 mt-44 flex flex-col gap-4 animate-fade-in">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src="../../public/img/FacebookLogo.png"
                alt="Facebook logo" 
                className="h-16 w-16 transition-transform hover:rotate-12"
              />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src="../../public/img/InstagramLogo.png"
                alt="Instagram logo" 
                className="h-16 w-16 transition-transform hover:rotate-12"
              />
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <img 
                src="../../public/img/TwitterLogo.png"
                alt="Twitter logo" 
                className="h-16 w-16 transition-transform hover:rotate-12"
              />
            </a>
          </div>

          <img 
            src="../../public/img/Tahu.png"
            alt="Tahu Bulat image" 
            className="h-[500px] mx-auto mt-48 animate-bounce-slow"
          />
        </div>
        </>
    );
};

export default Home;