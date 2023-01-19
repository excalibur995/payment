import { calculate, numbertoCurrency } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PaymentListCard = (props) => {
  const { avatar, creditCardName, creditCardNumber } = props;
  return (
    <div className="w-full border-b-2 border-gray-100">
      <section className="pt-3 sm:pt-4 pb-3">
        <div className="flex items-center space-x-4 ">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              alt="Neil image"
              src={avatar}
              width={32}
              height={32}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {creditCardName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {creditCardNumber}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {numbertoCurrency(calculate(props))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentListCard;
