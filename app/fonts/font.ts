import localFont from "next/font/local";
import { Ubuntu_Mono } from "next/font/google";
export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: "400",
  subsets: ["latin"],
});
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
