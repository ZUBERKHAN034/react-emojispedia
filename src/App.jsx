import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { emojipedia } from "./emojipedia";

function App() {
  return (
    <>
      <Heading />
      <Card emojis={emojipedia} />
    </>
  );
}

export default App;
