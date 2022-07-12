import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [username, setUsername] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`hi ${username}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={onChange}
          placeholder="id"
          type="text"
        ></input>
        <button>log in</button>
      </form>
    </div>
  );
}

export default App;
