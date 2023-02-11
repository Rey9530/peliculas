import React from "react";
import ListRoutes from "./components/ListRoutes";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";

function App(props) {
  return (
    <>
      <Navbar />
      <MainContainer>
        <ListRoutes />
      </MainContainer>
    </>
  );
}

export default App;
