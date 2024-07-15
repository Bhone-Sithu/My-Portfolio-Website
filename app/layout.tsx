import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "bhonesithu.dev",
    template: "%s | bhonesithu.dev",
  },
  description: "A Software Engineer with a growth mindset",
  openGraph: {
    title: "bhonesithu.dev",
    description: "A Software Engineer with a growth mindset",
    url: "https://bhonesithu.tech",
    siteName: "bhonesithu.tech",
    images: [
      {
        url: "https://bhonesithu.tech/favicon.png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Bhone Si Thu",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <meta name="google-adsense-account" content="ca-pub-1958740633064841"/>
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
