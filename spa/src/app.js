import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import MainContainer from "./components/MainContainer";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 10000,
  
  // you can also just use 'scale'
  transition: transitions.FADE
}

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} time {...options}>
      <div style={{ height: "100vh", display: "flex" }}>
        <MainContainer />
      </div>
    </AlertProvider>
  );
};

export default App;
