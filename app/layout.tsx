import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "holistik.com";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: { default: "HOLISTIK — Delicious by nature. Functional by design.", template: "%s — HOLISTIK" },
    description: "A Mexican-born platform for functional foods, beverages and everyday nutrition.",
    openGraph: {
      title: "HOLISTIK — The next chapter",
      description: "Delicious by nature. Functional by design.",
      type: "website",
      images: [{ url: "/og.jpg", width: 1536, height: 1024, alt: "HOLISTIK functional food and beverage platform" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HOLISTIK — The next chapter",
      description: "Delicious by nature. Functional by design.",
      images: ["/og.jpg"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
