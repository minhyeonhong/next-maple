import { NextResponse } from "next/server";

const allowedIPs = ["172.30.1.46"]; // 허용할 IP 주소 목록

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:7000",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(request) {
  // 요청의 IP 주소 얻기 (X-Forwarded-For 헤더 사용)
  const ip = request.headers.get("x-forwarded-for");

  if (request.method === "OPTIONS") {
    return NextResponse.json({}, { headers: corsHeaders });
  }

  // 허용된 IP 목록에 없는 경우 요청 차단
  if (!allowedIPs.includes(ip)) {
    return new Response("Not allowed", { status: 403 });
  }

  const response = NextResponse.next();
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.append(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
