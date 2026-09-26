import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal, Readex_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/i18n/language-provider";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://ali-mershed-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Mershed Mohamad — Graphic Designer, Video Editor & AI Content Creator",
    template: "%s · Ali Mershed Mohamad",
  },
  description:
    "Bilingual portfolio of Ali Mershed Mohamad — Graphic Designer, Video Editor, and AI Content Creator from Damascus, Syria. Design, video, and AI-assisted advertising content from idea to final cut.",
  keywords: [
    "Ali Mershed Mohamad",
    "علي مرشد محمد",
    "Graphic Designer",
    "Video Editor",
    "AI Content Creator",
    "Creative Designer Syria",
    "Damascus Designer",
    "Portfolio",
    "Graphic Design",
    "Video Editing",
    "AI Advertising",
    "Arabic Designer",
  ],
  authors: [{ name: "Ali Mershed Mohamad", url: siteUrl }],
  creator: "Ali Mershed Mohamad",
  publisher: "Ali Mershed Mohamad",
  applicationName: "Ali Mershed Mohamad Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo-sm.webp", type: "image/webp", sizes: "240x213" },
    ],
    apple: [{ url: "/assets/logo.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SY",
    url: siteUrl,
    siteName: "Ali Mershed Mohamad Portfolio",
    title: "Ali Mershed Mohamad — Creative Designer, Video Editor & AI Content Creator",
    description:
      "Bilingual portfolio of a graphic designer and AI content creator from Damascus, Syria.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Mershed Mohamad — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Mershed Mohamad — Portfolio",
    description:
      "Graphic Designer, Video Editor, and AI Content Creator from Damascus, Syria.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "ar-SY": siteUrl,
    },
  },
  category: "design",
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${readexPro.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
