import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import "../styles/main.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://northbound-project.com"),
  title: {
    default: "Northbound Project",
    template: "%s | Northbound Project",
  },
  description:
    "The official website of Northbound Project — Americana, roots and personal stories from the open road.",
  openGraph: {
    type: "website",
    siteName: "Northbound Project",
    title: "Northbound Project",
    description:
      "The official website of Northbound Project — Americana, roots and personal stories from the open road.",
    images: [
      {
        url: "/images/album/northbound-album-cover.png",
        width: 1254,
        height: 1254,
        alt: "Northbound. debut album cover by Northbound Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbound Project",
    description:
      "The official website of Northbound Project — Americana, roots and personal stories from the open road.",
    images: ["/images/album/northbound-album-cover.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
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
