import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DatvikAI - The Agent OS",
  description:
    "DatvikAI is the Agent OS that abstracts technical complexity so you can build AI agents that integrate with your entire business. Write TypeScript tools, deploy instantly.",
  keywords: [
    "AI agents",
    "agent OS",
    "TypeScript",
    "AI platform",
    "DatvikAI",
    "build AI agents",
    "no-code AI",
    "developer platform",
  ],
  authors: [{ name: "DatvikAI" }],
  creator: "DatvikAI",
  publisher: "DatvikAI",
  metadataBase: new URL("https://datvikai.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datvikai.com",
    siteName: "DatvikAI",
    title: "DatvikAI - The Agent OS",
    description:
      "Build AI agents that integrate with your entire business. Write TypeScript tools, deploy instantly. No infra headaches.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DatvikAI - The Agent OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DatvikAI - The Agent OS",
    description:
      "Build AI agents that integrate with your entire business. Write TypeScript tools, deploy instantly.",
    images: ["/og-image.png"],
    creator: "@datvikai",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0f] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
