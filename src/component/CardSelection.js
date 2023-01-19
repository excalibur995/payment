import React from "react";

const CardSelection = ({ data }) => {
  return (
    <div className="border border-g-[#F2F7FC] bg-[#F2F7FC]">
      <div className="flex p-5">
        <div className="flex items-center h-5">
          <input
            id="helper-radio"
            aria-describedby="helper-radio-text"
            type="radio"
            defaultChecked
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="flex flex-col gap-1 ml-2 text-sm">
          <label
            htmlFor="helper-radio"
            className="font-medium text-black dark:text-gray-300"
          >
            Visa - {data.creditCardNumber}
          </label>
          <p
            id="helper-radio-text"
            className="text-xs font-normal text-gray-500 dark:text-gray-300"
          >
            {data.creditCardName} | exp {data.creditCardExpiration}
          </p>
          <p
            id="helper-radio-text"
            className="text-xs font-normal text-gray-500 dark:text-gray-300"
          >
            <button className="font-bold text-blue-800">edit</button> |{" "}
            <button className="font-bold text-blue-800">delete</button>
          </p>
          <div className="pt-2">
            <label
              htmlFor="cvv"
              className="block text-sm font-normal text-gray-900 dark:text-white"
            >
              Security Code
            </label>
            <input
              type="password"
              maxLength={3}
              max={3}
              id="CVV"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVV"
              required
            />
          </div>
        </div>
      </div>
      <button className="px-5 pb-5 font-semibold text-blue-800">
        + Add New Card
      </button>
    </div>
  );
};

export default CardSelection;
