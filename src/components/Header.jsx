const Header = ({ totalIncome }) => {
  return (
    <div className="w-full  justify-center">
      <div className="header flex justify-between m-auto mt-10 items-center">
        <h1 className="text-2xl font-semibold text-gray-600">Income Tracker</h1>
        <h1 className="text-3xl font-semibold text-gray-600 bg-gray-300 px-2 py-2 rounded-md">
          ${totalIncome}
        </h1>
      </div>
    </div>
  );
};

export default Header;
