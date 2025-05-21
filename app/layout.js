"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar/page";
import Footer from "./components/footer/page";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  // List of routes where you want to hide header/footer
  const hideLayoutRoutes = ["/premium-content-writing-services","/website-development-service"];

  const hideLayout = hideLayoutRoutes.includes(pathname);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
         {!hideLayout && <Header />}
        <main className="flex-1">{children}</main>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
