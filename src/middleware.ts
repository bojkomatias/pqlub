import { NextRequest, NextResponse } from "next/server";
import { i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


function getLocale(request: NextRequest): string | undefined {
   // Negotiator expects plain object so we need to transform headers
   const negotiatorHeaders: Record<string, string> = {}
   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

   // console.log(negotiatorHeaders)

   // Use negotiator and intl-localematcher to get best locale
   let languages = new Negotiator({ headers: negotiatorHeaders }).languages()

   console.log(languages);
   
   // @ts-ignore locales are readonly
   const locales: string[] = i18n.locales
   return matchLocale(languages, locales, i18n.defaultLocale)
}



export function middleware(request: NextRequest) {
   const pathname = request.nextUrl.pathname;
   console.log(pathname)
   // Check if there is any supported locale in the pathname
   const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
   )

   // Do not redirect if the pathname is an image or asset on the public folder
   if (['/images/', '/assets/'].some((path) => pathname.startsWith(path))) return NextResponse.next()

   // Redirect if there is no locale
   if (pathnameIsMissingLocale) {
      const locale = getLocale(request)

      // e.g. incoming request is /products
      // The new URL is now /en/products
      return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
   }
}

export const config = {
   // do not localize next.js paths
   matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",],
};