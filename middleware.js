import { NextResponse } from "next/server";

export function middleware(request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (ua.toLowerCase().includes("curl")) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ryhndastra</title>

<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');

  :root {
    --green: #00ff88;
    --cyan: #00ccff;
    --orange: #ff6600;
    --purple: #cc99ff;
    --dim: #3a3a3a;
    --bg: #0a0a0a;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--green);
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    min-height: 100vh;
    padding: 24px;
    cursor: default;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 100;
  }

  .prompt {
    color: #555;
    font-size: 13px;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadein 0.3s 0.1s forwards;
  }

  .prompt span {
    color: var(--cyan);
  }

  .ascii-name {
    font-size: clamp(7px, 1.4vw, 13px);
    line-height: 1.2;
    white-space: pre;
    color: var(--orange);
    text-shadow: 0 0 20px rgba(255,102,0,0.4);
    margin-bottom: 8px;
    opacity: 0;
    animation: fadein 0.5s 0.3s forwards;
  }

  .ascii-sub {
    font-size: clamp(7px, 1.1vw, 11px);
    line-height: 1.2;
    white-space: pre;
    color: var(--purple);
    text-shadow: 0 0 15px rgba(204,153,255,0.3);
    margin-bottom: 32px;
    opacity: 0;
    animation: fadein 0.5s 0.5s forwards;
  }

  .section {
    border: 1px solid var(--green);
    margin-bottom: 16px;
    position: relative;
    opacity: 0;
    animation: slidein 0.4s ease forwards;
  }

  .section:nth-child(3) { animation-delay: 0.6s; }
  .section:nth-child(4) { animation-delay: 0.75s; }
  .section:nth-child(5) { animation-delay: 0.9s; }
  .section:nth-child(6) { animation-delay: 1.05s; }

  .section-label {
    position: absolute;
    top: -9px;
    left: 12px;
    background: var(--bg);
    padding: 0 8px;
    color: var(--green);
    font-size: 12px;
    font-weight: 700;
  }

  .section-body {
    padding: 20px 18px 16px;
    font-size: 13px;
    line-height: 1.9;
  }

  .bio-text a {
    color: var(--cyan);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }

  .bio-text a:hover {
    border-color: var(--cyan);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 6px 24px;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
    padding: 3px 0;
    transition: color 0.15s;
    position: relative;
  }

  .skill-item::before {
    content: '→';
    color: var(--orange);
    flex-shrink: 0;
  }

  .skill-item:hover {
    color: var(--cyan);
  }

  .skill-item:hover .skill-bar {
    background: var(--cyan);
  }

  .skill-bar-wrap {
    flex: 1;
    height: 2px;
    background: var(--dim);
    margin-left: 4px;
  }

  .skill-bar {
    height: 100%;
    background: var(--green);
    transition: background 0.15s;
  }

  .skills-note {
    margin-top: 12px;
    font-size: 11px;
    color: #555;
  }

  .skills-note span {
    color: var(--orange);
  }

  .project-row {
    display: flex;
    gap: 12px;
    padding: 5px 0;
    border-bottom: 1px solid rgba(0,255,136,0.07);
    font-size: 13px;
  }

  .project-row:last-child {
    border-bottom: none;
  }

  .project-arrow {
    color: var(--orange);
    flex-shrink: 0;
  }

  .project-text {
    color: var(--green);
  }

  .project-text a {
    color: var(--cyan);
    text-decoration: none;
  }

  .project-text a:hover {
    text-decoration: underline;
  }

  .project-note {
    color: #555;
    font-size: 11px;
    margin-top: 2px;
  }

  .contact-row {
    display: flex;
    align-items: center;
    padding: 5px 0;
    font-size: 13px;
    border-bottom: 1px solid rgba(0,255,136,0.07);
  }

  .contact-row:last-child {
    border-bottom: none;
  }

  .contact-label {
    color: var(--cyan);
    width: 90px;
    flex-shrink: 0;
  }

  .contact-dots {
    flex: 1;
    color: var(--green);
    opacity: 0.2;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 3px;
    margin: 0 6px;
  }

  .contact-val a {
    color: var(--green);
    text-decoration: none;
    transition: color 0.15s;
  }

  .contact-val a:hover {
    color: var(--cyan);
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    background: var(--green);
    vertical-align: middle;
    margin-left: 3px;
    animation: blink 1s step-end infinite;
  }

  .skull {
    position: fixed;
    right: 24px;
    bottom: 24px;
    font-size: 22px;
    opacity: 0.4;
    animation: float 3s ease-in-out infinite;
    cursor: pointer;
  }

  .skull:hover {
    opacity: 1;
  }

  .footer-line {
    margin-top: 8px;
    font-size: 11px;
    color: #444;
    opacity: 0;
    animation: fadein 0.4s 1.3s forwards;
  }

  @keyframes fadein {
    to { opacity: 1; }
  }

  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
</style>
</head>

<body>

<div class="prompt">
  (base) [visitor@internet ~]$ curl <span>reyhand-astra.vercel.app</span>
</div>

<div class="ascii-name">
 ██████╗ ██╗   ██╗██╗  ██╗███╗   ██╗██████╗  █████╗ ███████╗████████╗██████╗  █████╗ 
 ██╔══██╗╚██╗ ██╔╝██║  ██║████╗  ██║██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
 ██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║██║  ██║███████║███████╗   ██║   ██████╔╝███████║
 ██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║██║  ██║██╔══██║╚════██║   ██║   ██╔══██╗██╔══██║
 ██║  ██║   ██║   ██║  ██║██║ ╚████║██████╔╝██║  ██║███████║   ██║   ██║  ██║██║  ██║
 ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
</div>

<div class="ascii-sub">
  frontend dev  //  sometimes the code works  //  mostly it doesn't
</div>

<div class="section">
  <span class="section-label">about_me</span>

  <div class="section-body bio-text">
    Hey... I'm ryhndastra.<br>
    I don't really know what to write here — just check the
    <a href="https://reyhand-astra.vercel.app" target="_blank">website</a>.<br><br>

    This is my corner of the internet. It's a bit empty. That's fine.
    <span class="cursor"></span>
  </div>
</div>

<div class="section">
  <span class="section-label">skills</span>

  <div class="section-body">
    <div class="skills-grid" id="skillsGrid"></div>

    <div class="skills-note">
      <span>↑</span>
      hover for vibes — or just check the
      <a
        href="https://reyhand-astra.vercel.app"
        target="_blank"
        style="color:var(--cyan);text-decoration:none"
      >
        interactive version
      </a>,
      it's cooler
    </div>
  </div>
</div>

<div class="section">
  <span class="section-label">projects</span>

  <div class="section-body">

    <div class="project-row">
      <span class="project-arrow">→</span>

      <div>
        <div class="project-text">
          check my github —
          <a href="https://github.com/ryhndastra" target="_blank">
            github.com/ryhndastra
          </a>
        </div>

        <div class="project-note">
          a few are public. most are private. idk, i just like keeping them to myself for now.
        </div>
      </div>
    </div>

    <div class="project-row">
      <span class="project-arrow">→</span>

      <div>
        <div class="project-text">
          full portfolio —
          <a href="https://reyhand-astra.vercel.app" target="_blank">
            reyhand-astra.vercel.app
          </a>
        </div>

        <div class="project-note">
          the real one. with animations and everything.
        </div>
      </div>
    </div>

  </div>
</div>

<div class="section">
  <span class="section-label">contact</span>

  <div class="section-body">

    <div class="contact-row">
      <span class="contact-label">GitHub</span>

      <span class="contact-dots">
        ····················································
      </span>

      <span class="contact-val">
        <a href="https://github.com/ryhndastra" target="_blank">
          github.com/ryhndastra
        </a>
      </span>
    </div>

    <div class="contact-row">
      <span class="contact-label">Email</span>

      <span class="contact-dots">
        ····················································
      </span>

      <span class="contact-val">
        <a href="mailto:ryhndastra@gmail.com">
          ryhndastra@gmail.com
        </a>
      </span>
    </div>

  </div>
</div>

<div class="footer-line">
  — or just open a browser like a normal person:
  <a href="https://reyhand-astra.vercel.app" style="color:#555">
    reyhand-astra.vercel.app
  </a>
</div>

<div class="skull" title="boo">💀</div>

<script>
const skills = [
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'JavaScript', level: 88 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML & CSS', level: 92 },
  { name: 'Node.js', level: 65 },
  { name: 'Git', level: 78 },
]

const grid = document.getElementById('skillsGrid')

skills.forEach(s => {
  const el = document.createElement('div')

  el.className = 'skill-item'

  el.innerHTML = \`
    <span>\${s.name}</span>

    <div class="skill-bar-wrap">
      <div class="skill-bar" style="width:\${s.level}%"></div>
    </div>
  \`

  grid.appendChild(el)
})

document.querySelector('.skull').addEventListener('click', () => {
  const msgs = [
    'you clicked the skull. nothing happens.',
    'still nothing.',
    'bro why are you clicking the skull',
    '...',
    'ok fine. have a good day.',
  ]

  let i = parseInt(localStorage.getItem('skullClicks') || '0')

  alert(msgs[Math.min(i, msgs.length - 1)])

  localStorage.setItem('skullClicks', i + 1)
})
</script>

</body>
</html>
`;

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
