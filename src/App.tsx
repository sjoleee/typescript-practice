import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
}

export default App;
