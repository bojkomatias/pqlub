import "./globals.css";
import { Lexend_Deca, Architects_Daughter } from "@next/font/google";
import Navbar from "../components/Navbar";

const lexend = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend" });
const arch = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${arch.variable} font-sans`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex h-full text-[#BFDB38] bg-[#002837]">
        <Navbar /> {children}
      </body>
    </html>
  );
}
