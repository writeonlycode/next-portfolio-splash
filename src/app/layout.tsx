import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { site } from "contentlayer/generated";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.title} | Home`,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spartan.className}>{children}</body>
    </html>
  );
}
