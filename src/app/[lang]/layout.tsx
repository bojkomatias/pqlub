import "./globals.css";
import { Lexend_Deca, Architects_Daughter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { i18n } from '../../i18n-config'

const sans = Lexend_Deca({ subsets: ["latin"], variable: "--font-sans" });
const handwritten = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwritten",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html
      lang={params.lang}
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
