import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import LeftNavigation from "@/components/RightNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ukraine Horizon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="ukraine horizon, сервера майкрафт, ураїне хорізон, топ-10 серверів майкрафт"
        />
        <meta property="og:image" content="noimageindex" />
        <link rel="shortcut icon" href="favoicon.ico" />
      </head>
      <body className={`${inter.className} gap-[70px] lg:gap-[100px]`}>
        <div className="body-image"></div>
        <div className="left-image"></div>
        <HeaderComponent />
        <main className="lg:flex container gap-[70px]">
          <section className="w-full lg:flex-1">{children}</section>
          <LeftNavigation />
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
