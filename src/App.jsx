import { useState } from "react";
import BottomNav from "./Components/BottomNav";
import Feed from "./Components/Feed";
import Friends from "./Components/Friends";
import Navigation from "./Components/Navigation";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode( (prevMode) => !prevMode)
    document.documentElement.classList.toggle("dark", !darkMode);
  }
  return (
    <>
      <div className={`flex min-h-screen w-full items-center justify-center md:flex-row ${darkMode ? "bg-black" : "bg-white"}`}>
        <main className="flex min-h-screen w-full">
          <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Feed />
          <Friends/>
          <BottomNav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </main>
      </div>
    </>
  );
}

export default App;
