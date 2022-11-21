import React from "react";

const IncomeList = ({ income, index, removeicon }) => {
  const listdel = (e) => {
    removeicon(e);
  };

  return (
    <div className="group flex w-full relative justify-around bg-white py-2 hover:shadow-md rounded-lg shadow-sm my-4">
      <div className="w-full text-xl font-medium text-gray-700 pl-[5rem] max-md:w-[50%] max-md:break-words max-md:mr-6">
        {income.desc}
      </div>
      <div className="w-[20%] text-xl font-medium text-gray-700 max-md:w-full">
        $ {income.price}
      </div>
      <div className="w-[20%] text-xl font-medium text-gray-700 max-md:w-full">
        {income.date}
      </div>
      <button
        onClick={() => listdel(index)}
        className="w-0 group-hover:w-16 group-hover:duration-500 duration-300 cursor-pointer overflow-hidden absolute left-0 bg-[#FF1E2D] top-0 bottom-0 rounded-l-lg rounded-r-sm font-semibold text-gray-800"
      >
        X
      </button>
    </div>
  );
};

export default IncomeList;
