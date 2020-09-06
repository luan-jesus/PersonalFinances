import React from "react";

import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default App;
