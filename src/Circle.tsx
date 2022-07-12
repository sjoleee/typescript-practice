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
  bordercolor?: string;
}

function Circle(props: CircleProps) {
  return (
    <Container
      bgColor={props.bgColor}
      borderColor={props.bordercolor ?? props.bgColor}
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
