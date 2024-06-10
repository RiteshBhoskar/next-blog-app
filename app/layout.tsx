import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App Made Using Next Js",
  description: "Basic Blog Creating App Made To Practice Nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-900 bg-zinc-100 min-h-screen`}>
        <Container>
        <Header />
        {children}
        <Footer />
        </Container>
      </body>
    </html>
  );
}
