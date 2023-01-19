import React from "react";
import CardSelection from "./CardSelection";

const CardSelectSection = ({ data }) => {
  return (
    <section className="flex flex-col border-gray-20 w-full rounded-2xl border dark:border-border dark:bg-primary">
      <div className="flex flex-col p-3 gap-1">
        <h1 className="text-3xl font-bold">Payment</h1>
        <h2 className="text-xl font-semibold">Use Credit / Debit Card</h2>
        <div className="flex flex-col gap-3 border-t-2 border-gray-200 py-3">
          <h2 className="text-xl font-semibold"> Or Pay With</h2>
          <CardSelection data={data} />
          <a
            href={data.termsOfUse}
            target="_blank"
            className="font-semibold"
            rel="noreferrer noopener"
          >
            By using a digital wallet and continuing past this page, you have
            read and are accepting the{" "}
            <b className="text-blue-600">Terms of Use.</b>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardSelectSection;
