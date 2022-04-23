

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
    console.log('toggle')
  }

  return (
    <div className="container">
      
        <Navbar 
        toggleDarkMode = {toggleDarkMode}
        darkMode = {darkMode}
        />
        <Main 
        darkMode = {darkMode}
        />
    
    </div>
  );
}

export default App;
