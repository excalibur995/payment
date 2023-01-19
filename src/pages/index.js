import PaymentListCard from "@/component/PaymentListCard";
import { usePurchaseList } from "@/domain/list/hooks";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  const { data } = usePurchaseList();
  return (
    <Suspense>
      <section className="max-w-[1440px] mx-auto">
        {data.map((item) => (
          <Link key={item.id} href={`/payment/${item.id}`}>
            <PaymentListCard {...item} />
          </Link>
        ))}
      </section>
    </Suspense>
  );
}
