import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://environment-4.myqrcode.com/api-v1";

async function handler(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const pathStr = path.join("/");

  const targetUrl = `${BASE_URL}/${pathStr}${new URL(req.url).search}`;

  const headers: HeadersInit = {};

  // -------------------------
  // AUTH HEADER
  // -------------------------
  const authHeader = req.headers.get("authorization");
  const isLogout = pathStr.includes("auth/logout");
  if (authHeader && !isLogout) {
    headers["Authorization"] = authHeader;
  }

  // -------------------------
  // ACCEPT HEADER
  // -------------------------
  const acceptHeader = req.headers.get("accept");
  if (acceptHeader) {
    headers["accept"] = acceptHeader;
  }

  // -------------------------
  // COOKIE HANDLING
  // -------------------------
  const cookie = req.headers.get("cookie");
  if (cookie) {
    headers["cookie"] = cookie;
  }

  // -------------------------
  // BODY HANDLING
  // -------------------------
  const contentType = req.headers.get("content-type") || "";
const isFormData = contentType.includes("multipart/form-data");
const isJson = contentType.includes("application/json");
const isText = contentType.includes("text/");

let body: BodyInit | undefined = undefined;

if (req.method !== "GET") {
  if (isFormData) {
    body = await req.formData();
  } else if (isJson) {
    const text = await req.text();

    headers["Content-Type"] = "application/json";

    // ✅ allow empty string
    body = text;
  } else if (isText) {
    const text = await req.text();

    headers["Content-Type"] = contentType;

    body = text;
  } else if (
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const text = await req.text();

    headers["Content-Type"] =
      "application/x-www-form-urlencoded";

    body = text;
  } else {
    const text = await req.text();

    if (contentType) {
      headers["Content-Type"] = contentType;
    }

    body = text;
  }
}

console.log("[proxy] forwarding to:", targetUrl);
console.log("[proxy] headers sent to backend:", JSON.stringify(headers, null, 2));
console.log("[proxy] method:", req.method);

  // -------------------------
  // FETCH
  // -------------------------
  const res = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
  });

  const resContentType = res.headers.get("content-type") || "";
  const resBody = await res.text();

  console.log(`[proxy] ${req.method} ${pathStr} → ${res.status}`, resBody);

  // -------------------------
  // RESPONSE
  // -------------------------
  const responseHeaders = new Headers({
    "Content-Type": resContentType || "application/json",
  });

  // Forward Set-Cookie headers so browser stores refresh-token & CF_Authorization on localhost
  const setCookieValues = res.headers.getSetCookie();
  for (const cookie of setCookieValues) {
    responseHeaders.append("Set-Cookie", cookie);
  }

  if (res.status === 204 || res.status === 205) {
    return new NextResponse(null, {
      status: res.status,
      headers: responseHeaders,
    });
  }

  return new NextResponse(resBody, {
    status: res.status,
    headers: responseHeaders,
  });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;