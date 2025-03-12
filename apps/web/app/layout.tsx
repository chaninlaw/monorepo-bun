import type { Metadata } from "next";

import "@repo/ui/globals.css";
import { Providers } from "@components/providers";
import { Roboto } from "next/font/google";

const fontSans = Roboto({});

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
