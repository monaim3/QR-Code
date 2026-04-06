// lib/api.ts
import { storage } from "../utils/storage";

const BASE_URL = "/api/proxy";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method: HttpMethod;
  body?: any;
  customHeaders?: Record<string, string>;
}

const request = async (endpoint: string, options: RequestOptions) => {
  const token = storage.getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.customHeaders || {}),
  };

  // attach token if exists
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method,
    headers,
    ...(options.body && { body: JSON.stringify(options.body) }),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw data || { message: "Something went wrong" };
  }

  return data;
};

export const api = {
  // GET
  get: (endpoint: string, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "GET", customHeaders }),

  // POST
  post: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "POST", body, customHeaders }),

  // PUT (full update)
  put: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "PUT", body, customHeaders }),

  // PATCH (partial update)
  patch: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "PATCH", body, customHeaders }),

  // DELETE
  delete: (endpoint: string, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "DELETE", customHeaders }),
};