export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_URL");
}
