import { calculate, numbertoCurrency } from "@/lib/utils";
import React from "react";

const PaymentBreakDown = ({ data, isChecked, handleOnChange }) => {
  return (
    <section className="flex flex-col border-gray-20 w-full rounded-2xl border dark:border-border dark:bg-primary">
      <div className="flex flex-col p-5 gap-3">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Payment</h1>
          <h1 className="text-3xl font-bold">
            {numbertoCurrency(calculate(data))}
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between">
          <section className="w-full">
            <h2 className="text-xl font-semibold">Tickets</h2>
            <section className="flex flex-row items-center justify-between">
              <p>
                Resale Tickets: {numbertoCurrency(data.price)} × {data.quantity}
              </p>
              <h2 className="text-lg font-normal">
                {numbertoCurrency(data.price * data.quantity)}
              </h2>
            </section>
          </section>
        </div>
        <section className="w-full">
          <h2 className="text-xl font-semibold">Notes from Seller</h2>
          <p className="font-medium">{data.sellerNotes}</p>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold">Fees</h2>
          <section className="flex flex-row items-center justify-between">
            <p>
              Service Fee: {numbertoCurrency(data.serviceFee)} ×{data.quantity}
            </p>
            <h2 className="text-lg font-normal">
              {numbertoCurrency(data.serviceFee * data.quantity)}
            </h2>
          </section>
          <section className="flex flex-row items-center justify-between">
            <p>Order Processing Fee</p>
            <h2 className="text-lg font-normal">
              {numbertoCurrency(data.orderingFee)}
            </h2>
          </section>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold">Delivery</h2>
          <section className="flex flex-row items-center justify-between">
            <p className="capitalize">{data.delivery}</p>
            <h2 className="text-lg font-normal">{data.deliveryFee}</h2>
          </section>
        </section>
        <section className="flex flex-col gap-5">
          <span role="button" className="w-fit text-bold text-blue-600">
            Cancel Order
          </span>
          <h2 className="text-sm font-semibold">
            *All Sales Final - No Refunds
          </h2>
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              I have read and agree to the current{" "}
              <a
                href={data.termsOfUse}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-blue-600"
              >
                Terms of Use.
              </a>
            </label>
          </div>
          <button
            disabled={!isChecked}
            className="w-full h-[55px] bg-green-800 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Place Order
          </button>
        </section>
      </div>
    </section>
  );
};

export default PaymentBreakDown;
