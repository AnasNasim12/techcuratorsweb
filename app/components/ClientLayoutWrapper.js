'use client';

import { usePathname } from "next/navigation";
import Example from "./navbar/page";
import Footer from "./footer/page";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/premium-content-writing-services",
    "/website-development-service"
  ];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Example />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
