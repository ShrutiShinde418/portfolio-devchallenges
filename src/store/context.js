import { createContext, useState } from "react";

export const TabBarContext = createContext({
  activeTab: "CSS",
  setActiveTab: () => {},
});

const TabBarProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("CSS");
  return (
    <TabBarContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabBarContext.Provider>
  );
};

export default TabBarProvider;
