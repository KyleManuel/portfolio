import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Kyle Manuel Portfolio",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}