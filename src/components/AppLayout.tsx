import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <MainContent />
    </div>
  );
}

export default AppLayout;
