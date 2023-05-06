import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import WalletProvider from "@/components/wallet-provider";
import Header from "@/components/header";
import localFont from "next/font/local";

interface RootLayoutProps {
  children: React.ReactNode;
}

const circular = localFont({
  src: [
    {
      path: "../assets/fonts/CircularStd-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Light Italic.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Book.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../assets/fonts/CircularStd-Bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../assets/fonts/CircularStd-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-circular",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Defi",
    "Ethereum",
    "Trading",
    "Lossless social trading",
    "Decentralised finance",
  ],
  authors: [
    {
      name: "Loibon",
      url: "https://loibon-webapp.vercel.app/dashboard",
    },
  ],
  creator: "Loibon",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@loibon",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${circular.variable} font-sans`}
      suppressHydrationWarning
    >
      <head />

      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WalletProvider>
            <Header />
            {children}
            <Analytics />
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
