import React from "react";
import styled from "styled-components";

import Accounts from "./components/Accounts";
import ErrorBoundary from "./components/ErrorBoundary";

const MainPanel = styled.main`
  padding: 20px 10%;
`;

function App() {
  return (
    <ErrorBoundary>
      <MainPanel>
        <Accounts />
      </MainPanel>
    </ErrorBoundary>
  );
}

export default App;
