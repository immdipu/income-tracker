import React from "react";

const IncomeList = ({ income, index, removeicon }) => {
  const listdel = (e) => {
    removeicon(e);
  };

  return (
    <div>
      <div>{income.desc}</div>
      <div>{income.price}</div>
      <div>{income.date}</div>
      <button onClick={() => listdel(index)}>x</button>
    </div>
  );
};

export default IncomeList;
