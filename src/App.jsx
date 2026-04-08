import React from "react";
import SideBar from "./components/sideBar";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[100%] flex">
       <SideBar />
      </div>
      
    </div>
  );
};

export default App;