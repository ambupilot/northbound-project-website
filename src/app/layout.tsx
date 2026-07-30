import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

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
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
