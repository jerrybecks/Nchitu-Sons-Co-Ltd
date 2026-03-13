import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nchitu & Sons LLC — Quality Japanese Vehicles, Machinery & Equipment",
  description:
    "Your trusted source for quality used Japanese vehicles, machinery, and equipment. Global shipping to Africa, Europe, and beyond.",
  keywords: "used Japanese cars, Toyota, Honda, Nissan, machinery, equipment, Africa, export, Japan",
  openGraph: {
    title: "Nchitu & Sons LLC",
    description: "Quality used Japanese vehicles, machinery, and equipment with global shipping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
