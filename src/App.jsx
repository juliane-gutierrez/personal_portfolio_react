import React, { useState, useEffect } from "react";
import './App.css'
import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import { Projects } from "./components/projects";
import { Contacts } from "./components/contacts";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  /*contact emails api*/
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}> 
      <Navbar />

      <Hero />

      <Projects />

      <Contacts />

      <>
        <p> &copy; 2025 Juliane Gutierrez. All rights reserved.</p>
      </>
    </div>
  );
}

export default App;
