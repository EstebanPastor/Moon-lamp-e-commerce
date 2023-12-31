import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar/Navbar";
import Hydration from "./components/hydration/Hydration";
import Footer from "./components/ui/footer/Footer";

import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Moonlamp e-commerce",
  description: "E-commerce website for Moonlamps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Hydration>
            <Navbar />
            {children}
            <Footer />
          </Hydration>
        </body>
      </html>
    </ClerkProvider>
  );
}
