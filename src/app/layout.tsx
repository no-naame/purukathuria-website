import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Puru Kathuria | Engineer, Educator, Founder",
  description: "Engineer by training. Educator by calling. Democratizing AI knowledge to build a nation of builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased selection:bg-orange-100 selection:text-orange-900`}
      >
        {children}
      </body>
    </html>
  );
}
