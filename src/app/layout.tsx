import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../styles/main.scss";

export const metadata: Metadata = {
  title: {
    default: "Northbound Project",
    template: "%s | Northbound Project",
  },
  description:
    "The official website of Northbound Project — Americana, roots and personal stories from the open road.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
