import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_URL");
}

export const getAToken = async () => {
  const data = await auth.api.getToken({
    headers: await headers(),
  });
  return data?.token;
};
