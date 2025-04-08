import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import FallingSquares from "@/components/FallingSquares";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']  
})

export const metadata: Metadata = {
  title: "l3gium",
  description: "portfolio by l3gium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <div className="relative w-full min-h-screen bg-[linear-gradient(to_top_right,_rgba(0,0,0,0.9)_0%,_rgba(69,10,10,0.9)_70%,_rgba(139,0,0,0.9)_90%,_rgba(220,38,38,0.9)_100%)] -z-10">         
            <FallingSquares />
            <Header />
            {children}  
        </div>
      </body>
    </html>
  );
}
