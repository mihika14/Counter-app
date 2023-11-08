import React from "react";
import Counter from "./Counter";
import './App.css'

function App() {
  const initialCount = 3;
  return (
    <div className="App">
      <Counter initialCount={initialCount} />
    </div>
  );
}

export default App;
