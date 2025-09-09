import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sangblueKingdom = localFont({
  src: [
    {
      path: "../../public/fonts/SangBleuKingdom-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sangbleu-kingdom",
});

export const metadata = {
  title: "Kenny Otesile - Technology Research, Engineering & Entrepreneurship",
  themeColor: "#09090B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sangblueKingdom.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
