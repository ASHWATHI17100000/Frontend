import { useState } from 'react';
import './App.css'
import AverageCalculator from './AverageCalculator'


 

function App() {
 
  const [type, setType] = useState("e"); 
  const [size, setSize] = useState(10); 
  return (
    <>
  <div>
      <h1>Number Generator</h1>
      
      <label>Enter Size: </label>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        min="1"
      />

      <div>
        <button onClick={() => setType("e")}>Even</button>
        <button onClick={() => setType("prime")}>Prime</button>
        <button onClick={() => setType("fibo")}>Fibonacci</button>
        <button onClick={() => setType("r")}>Random</button>
      </div>

      <AverageCalculator type={type} size={size} />
    </div>
    </>
  )
}

export default App


// import React from "react";
// import AverageCalculator from "./components/AverageCalculator";

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Average Calculator</h1>
//       <AverageCalculator />
//     </div>
//   );
// }

// export default App;