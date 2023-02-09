import "./globals.css";
import { Lexend_Deca, Architects_Daughter } from "@next/font/google";
import Navbar from "../components/Navbar";

const sans = Lexend_Deca({ subsets: ["latin"], variable: "--font-sans" });
const handwritten = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwritten",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${handwritten.variable} font-sans`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="overflow-x-hidden flex h-full w-screen text-white bg-navy">
        <Navbar /> {children}
      </body>
    </html>
  );
}
