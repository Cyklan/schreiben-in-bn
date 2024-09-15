import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Merriweather } from "next/font/google";
import classNames from "classnames";
import { Footer } from "@/components/Footer";

const dmSans = Merriweather({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petra Ihm-Fahle",
  description: "Schreiben in Bad Nauheim - Petra Ihm-Fahle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentclasses = classNames(dmSans.className);

  return (
    <html lang="en">
      <body className="antialiased bg-base-100">
        <Nav />
        <main
          className={`${contentclasses} px-4 lg:max-w-4xl xl:max-w-7xl lg:p-0 lg:m-auto relative`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
