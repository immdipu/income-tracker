import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import Incomeitems from "./components/Incomeitems";

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income])

  return (
    <div className="w-[90%] m-auto border mt-16">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <Incomeitems income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
