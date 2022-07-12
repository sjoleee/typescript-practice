import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
  border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}

export default Circle;

// interface PlayerProps {
//   name: string;
//   mood: string;
// }

// const sayHello = (playerObj: PlayerProps) =>
//   `hi, ${playerObj.name}. Today is a ${playerObj.mood} day.`;

// sayHello({ name: "sangjo", mood: "good" });
