import "./App.css";
import React from "react";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Achievement from "./components/portfolio/Achievement";
import Hobbies from "./components/portfolio/Hobbies";
import Skills from "./components/portfolio/Skills";
import TabBar from "./components/portfolio/TabBar";
import TabContent from "./components/portfolio/TabContent";
import TabBarProvider from "./store/context";

const App = () => {
  return (
    <TabBarProvider>
      <div className="bg-background pt-12 xl:px-0 px-6">
        <div className="xl:container xl:mx-auto pb-10 xl:px-0 min-h-screen grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <About />
            <Experience />
            <Hobbies />
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:col-span-2 gap-8">
            <Skills />
            <Achievement />
            <TabBarComponent />
          </div>
        </div>
      </div>
    </TabBarProvider>
  );
};

const TabBarComponent = () => {
  return (
    <div className="col-span-2 flex flex-col gap-8">
      <TabBar />
      <TabContent />
    </div>
  );
};

export default App;
