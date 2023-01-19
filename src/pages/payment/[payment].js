import CardSelectSection from "@/component/CardSelectSection";
import PaymentBreakDown from "@/component/PaymentBreakDown";
import { usePurchaseDetailList } from "@/domain/list/hooks";
import dayjs from "dayjs";
import React, { Suspense, useState } from "react";

export async function getServerSideProps(params) {
  const { payment } = params.query;
  if (typeof payment === "undefined" || payment === null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      payment_id: payment,
    },
  };
}

const PaymentPage = ({ payment_id }) => {
  const { data } = usePurchaseDetailList(payment_id);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Suspense>
      <div className="flex flex-col lg:flex-row gap-10">
        <section className="flex flex-col gap-5">
          <section className="flex flex-col border-gray-20 w-full rounded-2xl border dark:border-border dark:bg-primary">
            <div className="flex flex-col p-3 gap-1">
              <h1 className="text-3xl font-bold">Delivery</h1>
              <h2 className="text-xl font-semibold">
                {data.delivery} - {data.deliveryFee}
              </h2>
              <section className="text-sm text-gray-500">
                <span>
                  Tickets Available by{" "}
                  {dayjs(data.deliveryDate).format("ddd MMM DD, YYYY")}
                </span>
                <p>
                  These mobile tickets will be transferred directly to you from
                  a trusted seller. We&apos;ll email you instructions on how to
                  accept them on the original ticket provider&apos;s mobile app.
                </p>
              </section>
            </div>
          </section>
          <CardSelectSection data={data} />
        </section>
        <PaymentBreakDown
          data={data}
          isChecked={isChecked}
          handleOnChange={handleOnChange}
        />
      </div>
    </Suspense>
  );
};

export default PaymentPage;
