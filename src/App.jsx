import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Missionpage from "./pages/missionpage/Missionpage";
import Dashboard from "./pages/dashboard/Dashboard";
import Crew from "./pages/crewpage/Crew";
import Navbar from "./components/Navbar";
import Applayout from "./Applayout";
import "./App.css";

function App() {
  const [persent, setpersentage] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const scrolltop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage = (scrolltop / documentHeight) * 100;

      setpersentage(percentage);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${persent}%` }}></div>

      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route index element={<Homepage />} />
              <Route path="/mission" element={<Missionpage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crew" element={<Crew />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
