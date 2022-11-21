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
    <form className="mt-14 " onSubmit={submitHandler}>
      <div className="flex">
        <input
          type="text"
          placeholder="Income Description"
          id="desc"
          name="desc"
          className="w-full"
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          className="w-full"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          className="w-full"
          ref={date}
        />
        <input
          type="submit"
          value="ADD INCOME"
          className="w-full bg-gray-300 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default IncomeForm;
