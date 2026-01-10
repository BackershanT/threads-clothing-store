import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thread - Premium Fashion Clothing",
    template: "%s | Thread"
  },
  description:
    "Premium fashion clothing for men and women. Buy online with fast delivery in India.",
  keywords: ["clothing", "fashion", "online clothing store", "india fashion", "thread"],
  openGraph: {
    title: "Thread - Premium Fashion Clothing",
    description:
      "Shop premium fashion clothing online in India.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4 border-b flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders">Orders</Link>
        </nav>
        {children}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}
