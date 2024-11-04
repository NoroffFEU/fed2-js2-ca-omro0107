import { API_KEY } from "./constants";
import { getToken } from "../utilities/token";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  const accessToken = getToken();

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  headers.append("Content-Type", "application/json");

  console.log('Headers being sent:', Object.fromEntries(headers.entries()));

  return headers;
}
