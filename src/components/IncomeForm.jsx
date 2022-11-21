import React, { useRef } from "react";

const IncomeForm = ({ income, setIncome }) => {
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      desc.current.value !== "" &&
      price.current.value != "" &&
      date.current.value != " "
    ) {
      setIncome([
        ...income,
        {
          desc: desc.current.value,
          price: price.current.value,
          date: date.current.value,
        },
      ]);

      desc.current.value = null;
      price.current.value = null;
      date.current.value = null;
    }
  };

  return (
    <form
      className="my-14 relative income-form z-10 shadow-sm"
      onSubmit={submitHandler}
    >
      <div className="flex relative z-10 rounded-md max-md:flex-col">
        <input
          type="text"
          placeholder="Income Description..."
          id="desc"
          name="desc"
          className="w-full outline-none text-xl font-medium text-gray-700  h-11 py-4 px-3 placeholder:text-xl placeholder:text-gray-400 placeholder:font-normal rounded-l-[9px] max-md:rounded-l-[0px] "
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price..."
          className="w-full outline-none text-xl font-medium text-gray-700 h-11 py-4 px-3 placeholder:text-xl placeholder:font-normal"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          className="w-[70%]  outline-none h-11 py-4 px-3 pr-[5rem] text-xl text-gray-600 font-medium max-md:w-full"
          ref={date}
        />
        <input
          type="submit"
          value="ADD INCOME"
          className="w-[60%] cursor-pointer outline-none h-11 text-xl font-bold text-gray-700 p-2 rounded-r-[9px] bg-[#FFCE00] duration-500 hover:bg-transparent hover:ease-linear hover:duration-500 max-md:w-full max-md:rounded-r-[0px]
          "
        />
      </div>
    </form>
  );
};

export default IncomeForm;
