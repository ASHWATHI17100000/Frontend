import React, { useState, useEffect } from "react";

const AverageCalculator = ({ type, size }) => {
  const [windowprevstate, setWindowPrevState] = useState([]);
  const [windowcurrentstate, setWindowCurrentState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  
  const generateNumbers = (type, size) => {
    let newNumbers = [];

    if (type === "e") {
      newNumbers = Array.from({ length: size }, (_, i) => 2 * (i + 1)); // Even numbers
    } else if (type === "prime") {
      newNumbers = generatePrimes(size); // Generate first size prime numbers
    } else if (type === "fibo") {
      newNumbers = generateFibonacci(size); // Generate first size Fibonacci numbers
    } else if (type === "r") {
      newNumbers = Array.from({ length: size }, () =>
        Math.floor(Math.random() * 100)
      ); // Random numbers
    }

    return newNumbers;
  };

  
  const generatePrimes = (n) => {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generateFibonacci = (n) => {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  
  const calculateAverage = (arr) => {
    if (arr.length === 0) return 0;
    return (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2);
  };

  // Effect to simulate API call
  useEffect(() => {
    const newNumbers = generateNumbers(type, size);
    setWindowPrevState(windowcurrentstate);
    setWindowCurrentState(newNumbers);
    setNumbers(newNumbers);
    setAvg(calculateAverage(newNumbers));
  }, [type, size]); // Re-run when type or size changes

  return (
    <div>
      <h2>Average Calculator</h2>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Window Previous State:</strong> {JSON.stringify(windowprevstate)}</p>
      <p><strong>Window Current State:</strong> {JSON.stringify(windowcurrentstate)}</p>
      <p><strong>Numbers:</strong> {JSON.stringify(numbers)}</p>
      <p><strong>Average:</strong> {avg}</p>
    </div>
  );
};

export default AverageCalculator;

// import React, { useState } from "react";
// import axios from "axios";

// const AverageCalculator = () => {
//   const [numberType, setNumberType] = useState("p"); // Default: Prime numbers
//   const [responseData, setResponseData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchNumbers = async () => {
//     try {
//       setError(null);
//       const response = await axios.get(
//         http://20.244.56.144/test/${numberType},
//         {
//           headers: { Authorization: "Bearer YOUR_API_KEY" },
//         },
//       );
//       setResponseData(response.data);
//     } catch (err) {
//       setError("Error fetching data. Ensure the API key is correct.");
//       setResponseData(null);
//     }
//   };

//   return (
//     <div>
//       <label>Select Number Type: </label>
//       <select
//         onChange={(e) => setNumberType(e.target.value)}
//         value={numberType}
//       >
//         <option value="p">Prime</option>
//         <option value="f">Fibonacci</option>
//         <option value="e">Even</option>
//         <option value="r">Random</option>
//       </select>
//       <br />
//       <button onClick={fetchNumbers} style={{ marginTop: "10px" }}>
//         Fetch Numbers
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {responseData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Numbers: {JSON.stringify(responseData.numbers)}</h3>
//           <h3>Average: {calculateAverage(responseData.numbers)}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// const calculateAverage = (numbers) => {
//   if (!numbers || numbers.length === 0) return "N/A";
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return (sum / numbers.length).toFixed(2);
// };

// export default AverageCalculator;


// avg cal
