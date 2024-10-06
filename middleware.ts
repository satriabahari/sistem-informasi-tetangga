import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Jika tidak ada token (user belum login), redirect ke halaman login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika ada token, izinkan akses ke halaman
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Tentukan rute yang membutuhkan proteksi
};
