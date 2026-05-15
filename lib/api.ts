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
    ...(options.customHeaders || {}),
  };

  // -------------------------
  // AUTH
  // -------------------------
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const isFormData = options.body instanceof FormData;
  const isJson = options.body && typeof options.body === "object" && !isFormData;

  let body: any = undefined;

  // -------------------------
  // BODY HANDLING
  // -------------------------
  if (options.body !== undefined && options.body !== null) {
    if (isFormData) {
      body = options.body;
    } else if (isJson) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(options.body);
    } else {
      body = options.body;
    }
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method,
    headers,
    body,
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
  get: (endpoint: string, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "GET", customHeaders }),

  post: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "POST", body, customHeaders }),

  put: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "PUT", body, customHeaders }),

  patch: (endpoint: string, body: any, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "PATCH", body, customHeaders }),

  delete: (endpoint: string, customHeaders?: Record<string, string>) =>
    request(endpoint, { method: "DELETE", customHeaders }),
};