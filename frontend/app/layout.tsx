import type { Metadata } from "next";
import "./globals.css";

import { detectHost } from "./api";

export const metadata: Metadata = {
  title: "LLM",
  description: "The GoldenRAGtriever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://d1zkbwgd2iyy9p.cloudfront.net/themes/webstyle/favicon.ico" />
      <link rel="icon" href="https://d1zkbwgd2iyy9p.cloudfront.net/themes/webstyle/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
