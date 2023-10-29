import React from "react";
import styled from "styled-components";
import Login from "./login";
import CursorAnimation from "./CursonAnimation";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <MainContainer>
      <CursorAnimation/>
      <Login />
    </MainContainer>
  );
};

export default App;
