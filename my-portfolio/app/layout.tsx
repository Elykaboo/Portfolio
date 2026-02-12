// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Kyle Adrian Liwanag | Full Stack Developer</title>
      <body>
        <div id="instant-splash" aria-hidden="true">
          <div className="splash-glow splash-glow-1" />
          <div className="splash-glow splash-glow-2" />

          <div className="splash-center">
            <div className="splash-kicker">Kyle's Portfolio</div>
            <div className="splash-title">WELCOME</div>
            <div className="splash-line" />
            <div className="splash-sub">Loading portfolio…</div>

            <div className="splash-bar">
              <div className="splash-bar-fill" />
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
