// app/api/proxy/[...path]/route.ts

import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://environment-4.myqrcode.com/api-v1";

async function handler(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params; // ✅ await params
  const pathStr = path.join("/");

  const { search } = new URL(req.url);
  const targetUrl = `${BASE_URL}/${pathStr}${search}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const authHeader = req.headers.get("Authorization");
  if (authHeader) headers["Authorization"] = authHeader;

  const hasBody = ["POST", "PUT", "PATCH"].includes(req.method);
  const body = hasBody ? await req.text() : undefined;

  const res = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
  });

  const data = await res.text();

  return new NextResponse(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}

export const GET    = handler;
export const POST   = handler;
export const PUT    = handler;
export const PATCH  = handler;
export const DELETE = handler;