import { BASE_URL, CHECKOUT } from "@/lib/constant";

export async function fetchListData() {
  try {
    const req = await fetch(BASE_URL + CHECKOUT);
    const resp = await req.json();
    return resp;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchDetailData(id) {
  try {
    const req = await fetch(BASE_URL + CHECKOUT + `/${id}`);
    const resp = await req.json();
    return resp;
  } catch (error) {
    throw new Error(error.message);
  }
}
