// middleware.js  ← taruh di root, sejajar folder src/
import { NextResponse } from "next/server";

export function middleware(request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (ua.toLowerCase().includes("curl")) {
    const output = `
╔══════════════════════════════════════════╗
║           REY — Portfolio                ║
╚══════════════════════════════════════════╝

  about_me
  ──────────────────────────────────────
  men i dont know what to write here, just check the website

  skills
  ──────────────────────────────────────
  → check the website, its interactive
  → cool right?
  
  projects
  ──────────────────────────────────────
  → check my github, few of my projects are there, but most of them are private
  → idk why, but i just want to keep them private for now

  contact
  ──────────────────────────────────────
  GitHub    https://github.com/ryhndastra
  Email     ryhndastra@gmail.com

  → https://reyhand-astra.vercel.app/
`;
    return new NextResponse(output, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
