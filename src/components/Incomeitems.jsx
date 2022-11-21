import React from "react";
import IncomeList from "./IncomeList";

const Incomeitems = ({ income, setIncome }) => {
  const removeicon = (i) => {
    const temp = income.filter((v, index) => index != i);
    setIncome(temp);
  };

  return (
    <div>
      {income.map((item, index) => (
        <IncomeList
          key={index}
          income={item}
          index={index}
          removeicon={removeicon}
        />
      ))}
    </div>
  );
};

export default Incomeitems;
