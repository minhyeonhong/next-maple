import { NextResponse } from "next/server";

const allowedIPs = ["172.30.1.46", "::1"]; // 허용할 IP 주소 목록

const allowedOrigins = [
  'http://localhost:7000',
  // 다른 허용할 Origin을 여기에 추가
];

export function middleware(request) {
  const ip = request.headers.get("x-forwarded-for") || request.ip;
  const requestOrigin = request.headers.get('Origin');
  let corsHeaders = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // 허용된 IP 목록에 없는 경우 요청 차단
  if (!allowedIPs.includes(ip)) {
    return NextResponse.json({
      success: false,
      message: '꺼져 이 악당아!!',
    }, { status: 403 });
  }

  //cors체크
  if (allowedOrigins.includes(requestOrigin)) {
    corsHeaders['Access-Control-Allow-Origin'] = requestOrigin;
  }

  if (request.method === "OPTIONS") {
    return NextResponse.json({}, { headers: corsHeaders });
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
