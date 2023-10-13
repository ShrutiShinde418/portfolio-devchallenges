import "./App.css";
import React, { useState } from "react";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Achievement from "./components/portfolio/Achievement";
import Skills from "./components/portfolio/Skills";
import TabBar from "./components/portfolio/TabBar";
import TabContent from "./components/portfolio/TabContent";

const App = () => {
  const [activeTab, setActiveTab] = useState("CSS");
  return (
    <div className="bg-background pt-12">
      <div className="xl:container xl:mx-auto pb-10 xl:px-0 min-h-screen grid xl:grid-cols-3 md:grid-cols-2 gap-8">
        <About />
        <Skills />
        <Achievement />
        <Experience />
        <div className="col-span-2 flex flex-col gap-8">
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default App;
