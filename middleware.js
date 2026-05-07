import { NextResponse } from "next/server";

export function middleware(request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (ua.toLowerCase().includes("curl")) {
    // ANSI COLORS
    const reset = "\x1b[0m";

    const green = "\x1b[92m";
    const cyan = "\x1b[96m";
    const blue = "\x1b[94m";
    const magenta = "\x1b[95m";
    const yellow = "\x1b[93m";
    const orange = "\x1b[38;5;208m";
    const gray = "\x1b[90m";
    const white = "\x1b[97m";

    const output = `
${gray}(base) [visitor@internet ~]$ curl ${cyan}reyhand-astra.vercel.app${reset}

${orange}
 ██████╗ ██╗   ██╗██╗  ██╗███╗   ██╗██████╗  █████╗ ███████╗████████╗██████╗  █████╗
 ██╔══██╗╚██╗ ██╔╝██║  ██║████╗  ██║██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
 ██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║██║  ██║███████║███████╗   ██║   ██████╔╝███████║
 ██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║██║  ██║██╔══██║╚════██║   ██║   ██╔══██╗██╔══██║
 ██║  ██║   ██║   ██║  ██║██║ ╚████║██████╔╝██║  ██║███████║   ██║   ██║  ██║██║  ██║
 ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
${reset}

${magenta}mobile dev${reset}  //  ${gray}sometimes the code works${reset}  //  ${gray}mostly it doesn't${reset}

${green}┌──────────────────────────────────────────────────────────────┐
│                          about_me                            │
└──────────────────────────────────────────────────────────────┘${reset}

  ${white}Hey... I'm ryhndastra.${reset}
  I don't really know what to write here —
  just check the ${cyan}website${reset}.

  This is my corner of the internet.
  It's a bit empty. That's fine.

${cyan}┌──────────────────────────────────────────────────────────────┐
│                            skills                            │
└──────────────────────────────────────────────────────────────┘${reset}

  ${orange}→${reset} check the website, it's interactive

  ${orange}→${reset} hover random things.
    i spent way too long making tiny animations.

  ${orange}→${reset} terminal users don't get animations.
    unfortunate.

  ${orange}→${reset} the real portfolio has moving bars.
    peak technology honestly.

${magenta}┌──────────────────────────────────────────────────────────────┐
│                           projects                           │
└──────────────────────────────────────────────────────────────┘${reset}

  ${orange}→${reset} check my github
    ${cyan}github.com/ryhndastra${reset}

    a few are public.
    most are private.
    idk, i just like keeping them to myself for now.

  ${orange}→${reset} full portfolio
    ${cyan}reyhand-astra.vercel.app${reset}

    the real one.
    with animations and everything.

${blue}┌──────────────────────────────────────────────────────────────┐
│                            contact                           │
└──────────────────────────────────────────────────────────────┘${reset}

  ${cyan}GitHub${reset}  ................................ ${white}github.com/ryhndastra${reset}
  ${cyan}Email ${reset}  ................................ ${white}ryhndastra@gmail.com${reset}

${gray}────────────────────────────────────────────────────────────────${reset}

${gray}— or just open a browser like a normal person:${reset}
  ${cyan}https://reyhand-astra.vercel.app${reset}

${orange}💀${reset}
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
