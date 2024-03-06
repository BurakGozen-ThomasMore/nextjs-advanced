import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Create Next App",
  description: "Generated by create next app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Create Next App",
    description: "Generated by create next app",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}