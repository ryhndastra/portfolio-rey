// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (ua.toLowerCase().includes("curl")) {
    const output = String.raw`
(base) [visitor@internet ~]$ curl reyhand-astra.vercel.app

 ██████╗ ██╗   ██╗██╗  ██╗███╗   ██╗██████╗  █████╗ ███████╗████████╗██████╗  █████╗
 ██╔══██╗╚██╗ ██╔╝██║  ██║████╗  ██║██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
 ██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║██║  ██║███████║███████╗   ██║   ██████╔╝███████║
 ██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║██║  ██║██╔══██║╚════██║   ██║   ██╔══██╗██╔══██║
 ██║  ██║   ██║   ██║  ██║██║ ╚████║██████╔╝██║  ██║███████║   ██║   ██║  ██║██║  ██║
 ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝

 frontend dev  //  sometimes the code works  //  mostly it doesn't

┌──────────────────────────────────────────────────────────────┐
│ about_me                                                    │
└──────────────────────────────────────────────────────────────┘

  Hey... I'm ryhndastra.
  I don't really know what to write here —
  just check the website.

  This is my corner of the internet.
  It's a bit empty. That's fine.

┌──────────────────────────────────────────────────────────────┐
│ skills                                                      │
└──────────────────────────────────────────────────────────────┘

  → React           [█████████████████░░░] 85%
  → Next.js         [████████████████░░░░] 80%
  → JavaScript      [█████████████████░░░] 88%
  → TypeScript      [██████████████░░░░░░] 70%
  → Tailwind CSS    [██████████████████░░] 90%
  → HTML & CSS      [██████████████████░░] 92%
  → Node.js         [█████████████░░░░░░░] 65%
  → Git             [███████████████░░░░░] 78%

  ↑ hover for vibes — or just check the interactive version,
    it's cooler

┌──────────────────────────────────────────────────────────────┐
│ projects                                                    │
└──────────────────────────────────────────────────────────────┘

  → check my github
    github.com/ryhndastra

    a few are public.
    most are private.
    idk, i just like keeping them to myself for now.

  → full portfolio
    reyhand-astra.vercel.app

    the real one.
    with animations and everything.

┌──────────────────────────────────────────────────────────────┐
│ contact                                                     │
└──────────────────────────────────────────────────────────────┘

  GitHub  ................................ github.com/ryhndastra
  Email   ................................ ryhndastra@gmail.com

────────────────────────────────────────────────────────────────

— or just open a browser like a normal person:
  https://reyhand-astra.vercel.app

💀
`;

    return new NextResponse(output, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};