import { useQuery } from "@tanstack/react-query";
import { fetchDetailData, fetchListData } from "./services";

export function usePurchaseList() {
  return useQuery(["usePurchaseList"], fetchListData);
}

export function usePurchaseDetailList(id) {
  return useQuery(
    ["usePurchaseDetailList"],
    async () => await fetchDetailData(id),
    {
      enabled: typeof id !== "undefined",
    }
  );
}
